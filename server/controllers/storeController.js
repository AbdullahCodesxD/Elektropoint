const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Store = require("../models/storeModel");
const { default: mongoose } = require("mongoose");

exports.getAllStores = catchAsync(async function (req, res, next) {
  const stores = await Store.find();
  res.status(200).json({
    message: "success",
    data: stores,
    noOfStores: stores.length,
  });
});
exports.getStore = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid store id is required", 400));

  const store = await Store.findOne({ _id: id });
  if (!store) return next(new AppError("No store found with this id", 404));

  res.status(200).json({
    message: "success",
    data: store,
  });
});

exports.createStore = catchAsync(async function (req, res, next) {
  const { name, email, address } = req.body;

  if (!name.trim()) return next(new AppError("Name of store is required", 400));
  if (!email.trim())
    return next(new AppError("Email of store is required", 400));

  const store = await Store.create({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    address: address.trim(),
  });

  res.status(201).json({
    message: "success",
    data: store,
  });
});
exports.updateStore = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid store id is required", 400));
  if (!req.body) return next(new AppError("Store data is required", 400));

  const store = await Store.findOne({ _id: id });
  if (!store) return next(new AppError("No store found with this id", 404));

  const updatedStore = await Store.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "success",
    data: updatedStore,
  });
});
exports.deleteStore = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid store id is required", 400));

  const store = await Store.findOne({ _id: id });
  if (!store) return next(new AppError("No store found with this id", 404));

  await Store.findOneAndDelete({ _id: id });

  res.status(200).json({
    message: "success",
    data: "",
  });
});
