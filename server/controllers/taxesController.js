const mongoose = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Taxes = require("../models/taxesModel");
const { text } = require("body-parser");

exports.getAllTaxes = catchAsync(async function (req, res, next) {
  const taxes = await Taxes.find();

  res.status(200).json({
    message: "success",
    data: taxes,
  });
});
exports.getTax = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid tax id is required", 400));

  const tax = await Taxes.findOne({ _id: id });
  if (!tax) return next(new AppError("No tax found with given id", 404));

  res.status(200).json({
    message: "success",
    data: tax,
  });
});
exports.getActiveTaxes = catchAsync(async function (req, res, next) {
  const taxes = await Taxes.find({ status: "active" });
  res.status(200).json({
    message: "success",
    data: taxes,
  });
});
exports.createTaxes = catchAsync(async function (req, res, next) {
  const { country, percentage, status, name } = req.body;

  if (!country || !percentage || !name)
    return next(new AppError("All fields are required", 400));

  const tax = await Taxes.create({
    country: country.toLowerCase().trim(),
    percentage,
    status,
    name: name.toLowerCase().trim(),
  });
  res.status(201).json({
    message: "success",
    data: tax,
  });
});

exports.deleteTax = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid tax id is required", 400));
  const tax = await Taxes.findOne({ _id: id });
  if (!tax) return next(new AppError("No tax found with given id", 404));

  await Taxes.findOneAndDelete({ _id: id });
  res.status(200).json({
    message: "success",
    data: "",
  });
});
exports.updateTax = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid tax id is required", 400));
  if (!req.body) return next(new AppError("Tax data is required", 400));
  const tax = await Taxes.findOne({ _id: id });
  if (!tax) return next(new AppError("No tax found with given id", 404));
  const updatedTax = await Taxes.findOneAndUpdate(
    { _id: id },
    {
      $set: req.body?.name
        ? {
            ...req.body,
            name: req.body.name.toLowerCase().trim(),
          }
        : req.body,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: updatedTax,
  });
});
