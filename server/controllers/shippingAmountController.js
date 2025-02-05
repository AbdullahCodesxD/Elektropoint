const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const ShippingAmount = require("../models/shippingAmountModel");
const mongoose = require("mongoose");

exports.getAllShippingAmounts = catchAsync(async function (req, res, next) {
  const shippingAmounts = await ShippingAmount.find();
  res.status(200).json({
    message: "success",
    data: shippingAmounts,
    noOfShippingAmounts: shippingAmounts.length,
  });
});
exports.getShippingAmount = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid shipping amount id is required", 400));
  const shippingAmount = await ShippingAmount.findOne({ _id: id });
  if (!shippingAmount)
    return next(new AppError("No shipping amount found with this id", 404));
  res.status(200).json({
    message: "success",
    data: shippingAmount,
  });
});
exports.getShippingAmountByType = catchAsync(async function (req, res, next) {
  const { type } = req.params;
  const shippingAmount = await ShippingAmount.find({ type });
  if (!shippingAmount)
    return next(new AppError("No shipping amount found with this type", 404));
  res.status(200).json({
    message: "success",
    data: shippingAmount,
    noOfShippingAmounts: shippingAmount.length,
  });
});
exports.getShippingAmountByPrice = catchAsync(async function (req, res, next) {
  const price = parseFloat(req.params.price);
  const shippingAmount = await ShippingAmount.find({
    $or: [
      {
        dynamicAmount: {
          $elemMatch: {
            to: { $gte: price },
            from: { $lte: price },
          },
        },
      },
    ],
  });

  res.status(200).json({
    message: "success",
    data: shippingAmount || 0,
    price,
    noOfShippingAmounts: shippingAmount.length,
  });
});

exports.createShippingAmount = catchAsync(async function (req, res, next) {
  const { name, type, amount, dynamicAmount } = req.body;

  if (!name) return next(new AppError("Shipping amount name is required", 400));
  if (!type) return next(new AppError("Shipping amount type is required", 400));

  if (type.toLowerCase().trim() === "fixed") {
    if (!amount) return next(new AppError("Shipping amount is required", 400));
    delete req.body.dynamicAmount;
    const shippingAmount = await ShippingAmount.create({
      ...req.body,
      amount: Number(amount),
    });
    res.status(200).json({
      message: "success",
      data: shippingAmount,
    });
  } else if (type.toLowerCase().trim() === "dynamic") {
    if (!dynamicAmount)
      return next(new AppError("Shipping dynamic amount is required", 400));
    delete req.body.amount;
    const shippingAmount = await ShippingAmount.create({
      ...req.body,
      dynamicAmount: dynamicAmount.map((amounts) => ({
        amount: Number(amounts.amount) || 0,
        from: Number(amounts.from) || 0,
        to: Number(amounts.to) || 0,
      })),
    });
    res.status(200).json({
      message: "success",
      data: shippingAmount,
    });
  }
});
exports.updateShippingAmount = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!id)
    return next(new AppError("Valid shipping amount id is required", 400));
  if (!req.body)
    return next(new AppError("Shipping amount data is required", 400));
  const shippingAmount = await ShippingAmount.findOne({ _id: id });
  if (!shippingAmount)
    return next(new AppError("No shipping amount found with this id", 404));
  const updatedShippingAmount = await ShippingAmount.findOneAndUpdate(
    { _id: id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    message: "success",
    data: updatedShippingAmount,
  });
});
exports.deleteShippingAmount = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid shipping amount id is required", 400));
  const shippingAmount = await ShippingAmount.findOneAndDelete({ _id: id });
  if (!shippingAmount)
    return next(new AppError("No shipping amount found with this id", 404));
  res.status(200).json({
    message: "success",
    data: [],
  });
});
