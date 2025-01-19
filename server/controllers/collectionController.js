const slugify = require("slugify");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Collection = require("../models/collectionModel");

// Create New Collection
exports.createCollection = catchAsync(async function (req, res, next) {
  const { title, description } = req.body;

  if (!title || !description)
    return next(new AppError("Title and description are required", 400));

  const checkIfCollectionExists = await Collection.find({
    title: title.trim(),
  });

  if (checkIfCollectionExists.length > 0)
    return next(
      new AppError("Collection name with this title already exists", 400)
    );

  const newCollection = await Collection.create({
    title: title.trim(),
    description: description.trim(),
    slug: slugify(title.trim().toLowerCase()),
  });

  res.status(201).json({
    message: "success",
    data: newCollection,
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
  const collections = await Collection.find();

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

  res.status(200).json({
    message: "success",
    data: collection,
  });
});
