const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Product = require("../models/productModel");

exports.search = catchAsync(async function (req, res, next) {
  const search = req.query.search?.trim() || "";
  const pageNo = parseInt(req.query.page, 10) || 1;
  const noOfProducts = parseInt(req.query.limit, 10) || 10;

  // Counting total matching documents
  const totalProducts = await Product.countDocuments({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      {
        tags: { $regex: search, $options: "i" },
      },
    ],
  });

  // Fetching paginated products
  const products = await Product.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      {
        tags: { $regex: search, $options: "i" },
      },
    ],
  })
    .limit(noOfProducts)
    .skip((pageNo - 1) * noOfProducts);

  res.status(200).json({
    message: "success",
    data: products,
    totalProducts,
    noOfProducts: products.length,
    noOfPages: Math.ceil(totalProducts / noOfProducts),
    currentPage: pageNo,
  });
});
