const slugify = require("slugify");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Product = require("../models/productModel");
const Collection = require("../models/collectionModel");

// Create New Product
exports.createNewProduct = catchAsync(async function (req, res, next) {
  const { title, description, tags, media, status, category } = req.body;
  if (!title || !description || !category)
    return next(
      new AppError("Please provide a title,category and description", 400)
    );

  const collection = await Collection.findOne({
    $or: [
      { title: { $regex: new RegExp(`^${category.trim()}$`, "i") } },
      { slug: { $regex: new RegExp(`^${category.trim()}$`, "i") } },
    ],
  });

  if (!collection)
    return next(new AppError("Please provide a valid category", 400));

  const checkIfProductExists = Product.find({
    title: title.trim(),
  });

  if (checkIfProductExists.length > 0)
    return next(new AppError("Product with this title already exists.", 400));

  const product = await Product.create({
    title: title.trim(),
    description: description.trim(),
    slug: slugify(title.trim().toLowerCase()),
    tags,
    category: collection._id,
  });

  res.status(201).json({
    message: "success",
    data: product,
  });
});

// Get all products
exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  const noOfProducts = products.length;

  res.status(200).json({
    message: "success",
    data: products,
    noOfProducts,
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
  }).select("_id");

  if (!collection)
    return next(new AppError("No collection found with this slug", 404));
  const products = await Product.find({ category: collection?._id }).populate({
    path: "category",
    select: "title",
  });

  res.status(200).json({
    message: "success",
    data: products,
    noOfProducts: products.length,
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
  if (req.body.category)
    return next(new AppError("Cannot update category here", 400));

  const newProduct = await Product.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: req.body.title
        ? { ...req.body, slug: slugify(req.body.title.trim().toLowerCase()) }
        : req.body,
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
