const mongoose = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getJwt = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.login = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("All fields are required", 400));
  const user = await User.findOne({ email: email.toLowerCase().trim() });
  if (!user || !(await User.comparePassword(password, user.password)))
    return next(new AppError("Incorrect email or password", 401));
  const jwt = getJwt(user);
  res.status(200).json({
    message: "success",
    data: jwt,
  });
});

exports.createNewUser = catchAsync(async function (req, res, next) {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword)
    return next(new AppError("All fields are required", 400));

  if (password !== confirmPassword)
    return next(
      new AppError("Password and confirm password do not match", 400)
    );

  const user = await User.create({
    name: name.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    password,
  });
  const jwt = getJwt(user);

  res.status(200).json({
    message: "success",
    data: jwt,
  });
});

exports.getAllUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({ role: "user" });
  res.status(200).json({
    message: "success",
    data: users,
    noOfUsers: users.length,
  });
});

exports.getMe = catchAsync(async function (req, res, next) {
  res.status(200).json({
    message: "success",
    data: req.user,
  });
});

exports.updateCurrentUser = catchAsync(async function (req, res, next) {
  const id = req.user._id;
  if (!id) return next(new AppError("Valid user id is required", 400));

  if (!req.body) return next(new AppError("User data is required", 400));

  const user = await User.findOne({ _id: id });
  if (!user) return next(new AppError("No user found with this id", 404));

  const data = delete req.body.role;
  if (req.body.password) {
    if (!req.body.newPassword || !req.body.confirmPassword)
      return next(
        new AppError("New Password and Confirm password is required", 400)
      );
    if (req.body.newPassword !== req.body.confirmPassword)
      return next(
        new AppError("Password and confirm password do not match", 400)
      );

    const updatedUser = await User.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      message: "success",
      data: updatedUser,
    });
  } else {
    const updatedUser = await User.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "success",
      data: updatedUser,
    });
  }
});

exports.deleteCurrentUser = catchAsync(async function (req, res, next) {
  const id = req.user._id;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid user id is required", 400));

  const user = await User.findOne({ _id: id });
  if (!user) return next(new AppError("No user found with this id", 404));

  await User.findOneAndDelete({ _id: id });
  res.status(200).json({
    message: "success",
    data: "",
  });
});

exports.deleteUser = catchAsync(async function (req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return next(new AppError("Valid user id is required", 400));

  const user = await User.findOne({ _id: id });
  if (!user) return next(new AppError("No user found with this id", 404));

  await User.findOneAndDelete({ _id: id });
  res.status(200).json({
    message: "success",
    data: "",
  });
});
