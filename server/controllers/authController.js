const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  console.log(1);
  const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in! Please log in to get access.",
      });
    }
    return decoded;
  });
  req.user = await User.findById(decoded.id);
  next();
});

exports.checkRole = function (role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission to perform this action",
      });
    }
    next();
  };
};
