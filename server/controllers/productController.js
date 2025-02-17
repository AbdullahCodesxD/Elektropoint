const slugify = require("slugify");
const multer = require("multer");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Product = require("../models/productModel");
const Collection = require("../models/collectionModel");

// Define storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../uploads/products`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

const fileFilter = (req, file, cb) => {
  // Allowed mime types for images
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files are allowed!"), false); // Reject the file
  }
};

// Create multer instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

exports.uploadProductImages = upload.array("images", 5);

// Create New Product
exports.createNewProduct = catchAsync(async function (req, res, next) {
  const {
    title,
    description,
    tags = "",
    status,
    category = "",
    inventory = "",
    metaTitle = "",
    metaDescription = "",
    productType = "",
    vendor = "",
    price,
  } = req.body;
  if (!title || !description || (!category && !vendor))
    return next(
      new AppError(
        "Please provide a title, description and category or vendor",
        400
      )
    );

  const media = req?.files?.map((file) => file.filename);

  let collection;
  if (category) {
    collection = await Collection.findOne({
      $or: [
        { title: { $regex: new RegExp(`^${category.trim()}$`, "i") } },
        { slug: { $regex: new RegExp(`^${category.trim()}$`, "i") } },
      ],
    });

    if (!collection)
      return next(new AppError("Please provide a valid category", 400));
  }
  const checkIfProductExists = Product.find({
    title: title.trim(),
  });

  if (checkIfProductExists.length > 0)
    return next(new AppError("Product with this title already exists.", 400));

  const product = await Product.create({
    title: title?.trim(),
    description: description?.trim(),
    slug: slugify(title?.trim()?.toLowerCase()),
    tags,
    category: collection?._id,
    inventory: inventory?.trim()?.toLowerCase(),
    status: status?.trim()?.toLowerCase(),
    metaTitle,
    metaDescription,
    productType: productType?.trim()?.toLowerCase(),
    vendor: vendor?.trim()?.toLowerCase(),
    price,
    media,
  });

  res.status(201).json({
    message: "success",
    data: product,
  });
});

// Get all products
exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().populate({
    path: "category",
    select: "title",
  });
  const noOfProducts = products.length;

  res.status(200).json({
    message: "success",
    data: products,
    noOfProducts,
  });
});

exports.getAllVendors = catchAsync(async (req, res, next) => {
  const vendors = await Product.find().select("vendor").distinct("vendor");
  res.status(200).json({
    message: "success",
    data: vendors,
    noOfVendors: vendors.length,
  });
});
// Get Product by Slug
exports.getProductBySlug = catchAsync(async (req, res, next) => {
  const slug = req.params.slug.trim();
  const product = await Product.findOne({ slug }).populate({
    path: "category",
    select: "title",
  });

  if (!product) {
    return next(new AppError("Product not found", 404));
  }
  res.status(200).json({
    message: "success",
    data: product,
  });
});

// Delete Product
exports.deleteProduct = catchAsync(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    message: "success",
    data: [],
  });
});
exports.getProductsByCollection = catchAsync(async (req, res, next) => {
  const { collection: collectionParam } = req.params;
  const collection = await Collection.findOne({
    $or: [
      { title: { $regex: new RegExp(`^${collectionParam.trim()}$`, "i") } },
      { slug: { $regex: new RegExp(`^${collectionParam.trim()}$`, "i") } },
    ],
  }).select("_id conditionVendors");

  if (!collection)
    return next(new AppError("No collection found with this slug", 404));
  let products;

  if (collection.conditionVendors.length > 0) {
    products = await Product.find({
      vendor: { $in: collection.conditionVendors },
      status: "active",
    }).populate({
      path: "category",
      select: "title",
    });
  } else {
    products = await Product.find({
      category: collection?._id,
      status: "active",
    }).populate({
      path: "category",
      select: "title",
    });
  }

  res.status(200).json({
    message: "success",
    data: products,
    noOfProducts: products.length,
  });
});
exports.updateImages = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid product id is required", 400));
  const product = await Product.findOne({ _id: id });
  const orignal = req.body.orignal;
  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  const media = orignal
    ? [...product.media, ...req?.files?.map((file) => file.filename)]
    : req?.files?.map((file) => file.filename);
  console.log(media, "------------------");
  const newProduct = await Product.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        media,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    message: "success",
    data: newProduct,
  });
});
exports.updateProduct = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid product id is required", 400));
  if (!req.body) return next(new AppError("Product data is required", 400));
  if (req.body.slug) return next(new AppError("You cannot update slug", 400));
  const product = await Product.findOne({ _id: id });

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  const category = req.body.category;
  const collection = await Collection.findOne({
    $or: [
      { title: { $regex: new RegExp(`^${category?.trim()}$`, "i") } },
      { slug: { $regex: new RegExp(`^${category?.trim()}$`, "i") } },
    ],
  })?.select("_id");

  if (category && !collection)
    return next(new AppError("No collection found with this slug", 404));

  const data = req.body;
  const newProduct = await Product.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: req.body.title
        ? { ...data, slug: slugify(data?.title?.trim()?.toLowerCase()) }
        : data,

      category: collection?._id,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    message: "success",
    data: newProduct,
  });
});

exports.updateProductCategory = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid product id is required", 400));

  const product = await Product.findOne({ _id: id });

  if (!product) {
    return next(new AppError("Product not found", 404));
  }
  const category = req.body.category;

  if (!category) {
    return next(new AppError("Category is required", 400));
  }

  const collection = await Collection.findOne({
    $or: [
      { title: { $regex: new RegExp(`^${category.trim()}$`, "i") } },
      { slug: { $regex: new RegExp(`^${category.trim()}$`, "i") } },
    ],
  }).select("_id");

  if (!collection)
    return next(new AppError("No collection found with this slug", 404));

  const updatedProduct = await Product.findOneAndUpdate(
    {
      _id: id,
    },
    { category: collection._id },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: updatedProduct,
  });
});
