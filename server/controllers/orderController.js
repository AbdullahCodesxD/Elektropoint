const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Order = require("../models/orderModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");

exports.getAllOrders = catchAsync(async function (req, res, next) {
  const limit = parseInt(req.query.limit, 10) || 10;
  const pageNo = parseInt(req.query.page, 10) || 1;

  const noOfPages = Math.ceil((await Order.estimatedDocumentCount()) / limit);

  const orders = await Order.find()
    .populate("customer")
    .populate({
      path: "product",
      select: "title",
    })
    .skip((pageNo - 1) * limit)
    .limit(limit);

  res.status(200).json({
    message: "success",
    data: orders,
    noOfOrders: orders.length,
    noOfPages: noOfPages,
    currentPage: pageNo,
  });
});

exports.createOrder = catchAsync(async function (req, res, next) {
  const {
    customer,
    product,
    fullFilmentStatus,
    paymentStatus,
    noOfItems,
    price,
    deliveryMethod,
  } = req.body;
  if (!customer)
    return next(new AppError("Customer is required to create an order", 400));

  const order = await Order.create({
    customer,
    product,
    fullFilmentStatus,
    paymentStatus,
    noOfItems,
    price,
    deliveryMethod,
  });

  res.status(201).json({
    message: "success",
    data: order,
  });
});

exports.updateOrder = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!req.body) return next(new AppError("Order data is required", 400));

  const order = await Order.findOne({ _id: id });
  if (!order) return next(new AppError("No order found with this id", 404));

  if (req.body.customer) {
    const customer = await Customer.findOne({ _id: req.body.customer });
    if (!customer)
      return next(new AppError("No customer found with this id", 404));
    order.customer = customer._id;
  }

  if (req.body.product) {
    const product = await Product.findOne({ _id: req.body.product });
    if (!product)
      return next(new AppError("No product found with this id", 404));
    order.product = product._id;
  }

  const updatedOrder = await order.save({
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "success",
    data: updatedOrder,
  });
});

exports.deleteOrder = catchAsync(async function (req, res, next) {
  const id = req.params.id;

  const order = await Order.findOne({ _id: id });

  if (!order) return next(new AppError("No order found with this id", 404));

  await Order.findOneAndDelete({ _id: id });

  res.status(200).json({
    message: "success",
  });
});
