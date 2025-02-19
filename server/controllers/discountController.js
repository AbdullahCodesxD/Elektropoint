const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Discount = require("../models/discountModel");

exports.getAllDiscounts = catchAsync(async function (req, res, next) {
  // const discounts = await Discount.find().populate({
  //   path: "collections",
  //   select: "title",
  // });
  const discounts = await Discount.find();
  res.status(200).json({
    message: "success",
    data: discounts,
    noOfDiscounts: discounts.length,
  });
});
exports.createDiscount = catchAsync(async function (req, res, next) {
  const discount = await Discount.create(req.body);
  res.status(200).json({
    message: "success",
    data: discount,
  });
});

exports.updateDiscount = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid discount id is required", 400));
  if (!req.body) return next(new AppError("Discount data is required", 400));

  const discount = await Discount.findOne({ _id: id });
  if (!discount)
    return next(new AppError("No discount found with this id", 404));

  const updatedDiscount = await Discount.findOneAndUpdate(
    { _id: id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: updatedDiscount,
  });
});
exports.discountUsed = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid discount id is required", 400));
  const discount = await Discount.findOne({ _id: id });
  if (!discount)
    return next(new AppError("No discount found with this id", 404));

  const updatedDiscount = await Discount.findOneAndUpdate(
    { _id: id },
    {
      noOfTimesUsed: discount.noOfTimesUsed + 1,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: updatedDiscount,
  });
});
exports.deleteDiscount = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid discount id is required", 400));

  const discount = await Discount.findOne({ _id: id });
  if (!discount)
    return next(new AppError("No discount found with this id", 404));

  await Discount.findOneAndDelete({ _id: id });

  res.status(200).json({
    message: "success",
  });
});
exports.getDiscount = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid discount id is required", 400));
  const discount = await Discount.findOne({ _id: id });
  if (!discount)
    return next(new AppError("No discount found with this id", 404));

  const discountWithCollections = await Discount.findOne({ _id: id }).populate({
    path: "collections",
    select: "title",
  });
  res.status(200).json({
    message: "success",
    data: discountWithCollections,
  });
});
