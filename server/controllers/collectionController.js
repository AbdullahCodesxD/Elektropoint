const multer = require("multer");
const slugify = require("slugify");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Collection = require("../models/collectionModel");
const Product = require("../models/productModel");

// Define storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../uploads/categories`);
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
  console.log("ayatha", file);
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
    fileSize: 3 * 1024 * 1024,
  },
});

exports.uploadCollectionImages = upload.array("images", 3);

// Create New Collection
exports.createCollection = catchAsync(async function (req, res, next) {
  const { title, description, conditionVendors } = req.body;
  console.log(req.body, "gg");
  if (!title || !description)
    return next(new AppError("Title and description are required", 400));

  const checkIfCollectionExists = await Collection.find({
    title: title.trim(),
  });

  if (checkIfCollectionExists.length > 0)
    return next(
      new AppError("Collection name with this title already exists", 400)
    );

  const media = req?.files?.map((file) => file.filename);
  const conditionVendorsLowerCasedAndTrimmed = conditionVendors
    ?.map((vendor) => {
      return vendor.trim().toLowerCase();
    })
    ?.filter((vendor) => vendor);
  const newCollection = await Collection.create({
    title: title.trim(),
    description: description.trim(),
    slug: slugify(title.trim().toLowerCase()),
    conditionVendors: conditionVendorsLowerCasedAndTrimmed,
    media,
  });

  res.status(201).json({
    message: "success",
    data: newCollection,
  });
});
exports.forHomePage = catchAsync(async function (req, res, next) {
  const collections = await Collection.find({ status: "active" })
    .sort({
      _id: 1,
    })
    .limit(4)
    .select("title conditionVendors slug");

  const promisesOfProductsData = collections.map((collection) => {
    if (collection.conditionVendors.length > 0) {
      return Product.find({
        vendor: { $in: collection.conditionVendors },
      })
        .sort({
          _id: -1,
        })
        .limit(4)
        .select("media slug title price description");
    } else {
      return Product.find({
        category: collection._id,
      })
        .sort({
          _id: -1,
        })
        .limit(4)
        .select("media slug title price");
    }
  });

  const productsData = await Promise.all(promisesOfProductsData);

  const data = collections.map((collection, i) => {
    return {
      title: collection.title,
      slug: collection.slug,
      products: productsData?.at(i),
    };
  });

  res.status(200).json({
    message: "success",
    data,
  });
});
// Delete a collection
exports.deleteCollection = catchAsync(async function (req, res, next) {
  const collectionId = req.params.collection;

  const collection = await Collection.findByIdAndDelete(collectionId);

  if (!collection) {
    return next(new AppError("Collection not found", 404));
  }

  res.status(200).json({
    message: "success",
  });
});

// Gell all collections
exports.getAllCollections = catchAsync(async function (req, res, next) {
  const collectionsResponse = await Collection.find();
  const collectionsCount = await Promise.all(
    collectionsResponse.map((collection) => {
      if (collection.conditionVendors.length > 0) {
        return Product.countDocuments({
          $or: [
            {
              vendor: { $in: collection.conditionVendors },
            },
            {
              category: collection._id,
            },
          ],
        });
      }
      return Product.countDocuments({ category: collection._id });
    })
  );

  const collections = collectionsResponse.map((collection, i) => {
    return {
      ...collection._doc,
      noOfProducts: collectionsCount[i],
    };
  });

  const noOfCollections = collections.length;

  res.status(200).json({
    message: "success",
    data: collections,
    noOfCollections,
  });
});

exports.getCollectionBySlug = catchAsync(async function (req, res, next) {
  const slug = req.params.slug.trim();

  const collection = await Collection.findOne({ slug });

  if (!collection)
    return next(new AppError("No collection found with this slug", 404));
  const noOfProducts =
    collection.conditionVendors.length > 0
      ? await Product.countDocuments({
          vendor: { $in: collection.conditionVendors },
        })
      : await Product.countDocuments({ category: collection._id });
  res.status(200).json({
    message: "success",
    data: collection,
    noOfProducts,
  });
});

exports.updateCollection = catchAsync(async function (req, res, next) {
  const { collection: collectionSlug } = req.params;
  if (!collectionSlug)
    return next(new AppError("Valid collection slug is required", 400));
  if (!req.body) return next(new AppError("Collection data is required", 400));

  const collection = await Collection.findOne({
    slug: collectionSlug.toLowerCase().trim(),
  });

  if (!collection)
    return next(new AppError("No collection found for this slug", 404));

  if (req.body.title) {
    req.body.slug = slugify(req.body.title.trim().toLowerCase());
  }
  const updatedCollection = await Collection.findOneAndUpdate(
    {
      slug: collectionSlug.toLowerCase().trim(),
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: updatedCollection,
  });
});

exports.assignProduct = catchAsync(async function (req, res, next) {
  const { collection: collectionSlug, productId } = req.params;
  if (!collectionSlug)
    return next(new AppError("Valid collection slug is required", 400));
  if (!productId)
    return next(new AppError("Valid product id is required", 400));

  const collection = await Collection.findOne({
    slug: collectionSlug.toLowerCase().trim(),
  });
  if (!collection)
    return next(new AppError("No collection found for this slug", 404));

  const product = await Product.findOne({ _id: productId });
  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  const updatedProduct = await Product.findOneAndUpdate(
    { _id: productId },
    { category: collection._id },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    message: "success",
    updatedProduct,
  });
});
