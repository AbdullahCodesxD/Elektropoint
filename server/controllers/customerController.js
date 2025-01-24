const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Customer = require("../models/customerModel");
const Order = require("../models/orderModel");

exports.getAllCustomers = catchAsync(async function (req, res, next) {
  const customersWithoutOrders = await Customer.find();
  const customers = await Promise.all(
    customersWithoutOrders.map(async (customer) => {
      const orders = await Order.find({ customer: customer._id });
      const amountSpent = orders
        ?.map((order) => order.price)
        ?.reduce((a, b) => a + b, 0);
      return {
        ...customer._doc,
        noOfOrders: orders.length,
        amountSpent,
      };
    })
  );

  res.status(200).json({
    message: "success",
    data: customers,
  });
});
exports.getCustomer = catchAsync(async function (req, res, next) {
  const id = req.params.id;
  if (!id) return next(new AppError("Valid customer id is required", 400));

  const customer = await Customer.findOne({ _id: id });

  if (!customer) {
    return next(new AppError("No customer found with this id", 404));
  }

  res.status(200).json({
    message: "success",
    data: customer,
  });
});

exports.createCustomer = catchAsync(async function (req, res, next) {
  const { name, email, comment, address } = req.body;

  if (!name.trim() || !email.trim())
    return next(new AppError("Name and email are required", 400));

  const checkIfCustomerExists = await Customer.find({
    email: email.toLowerCase().trim(),
  });
  if (checkIfCustomerExists.length > 0)
    return next(new AppError("A customer with this email already exists", 400));

  const newCustomer = await Customer.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    comment,
    address: address?.toLowerCase()?.trim(),
  });

  res.status(201).json({
    message: "success",
    data: newCustomer,
  });
});

exports.updateCustomer = catchAsync(async function (req, res, next) {
  const id = req.params.id;

  if (!id) return next(new AppError("Valid customer id is required", 400));
  if (!req.body) return next(new AppError("Customer data is required", 400));

  const customer = await Customer.findOne({
    _id: id,
  });

  if (!customer)
    return next(new AppError("No customer found with this id", 404));

  const updatedCustomer = await Customer.findOneAndUpdate(
    {
      _id: id,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: updatedCustomer,
  });
});

exports.deleteCustomer = catchAsync(async function (req, res, next) {
  const id = req.params.id;

  if (!id) return next(new AppError("Valid customer id is required", 400));

  const customer = await Customer.findOne({
    _id: id,
  });

  if (!customer)
    return next(new AppError("No customer found with this id", 404));

  await Customer.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "success",
    data: [],
  });
});
