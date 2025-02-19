const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Product = require("../models/productModel");
const Order = require("../models/orderModel");

exports.getAdminDashData = catchAsync(async function (req, res, next) {
  const products = await Product.find().sort({ _id: -1 }).limit(5);
  const orders = await Order.find().sort({ _id: -1 }).limit(5);
  res.status(200).json({
    message: "success",
    data: {
      products,
      orders,
    },
  });
});
