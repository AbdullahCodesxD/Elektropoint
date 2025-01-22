const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
    required: [true, "Order must belong to a customer"],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },

  fullFilmentStatus: {
    type: String,
    default: "unfullfilled",
    enum: ["unfullfilled", "fullfilled"],
  },

  paymentStatus: {
    type: String,
    default: "unpaid",
    enum: ["unpaid", "paid"],
  },

  noOfItems: {
    type: String,
    default: "0",
  },
  price: {
    type: Number,
    default: 0,
  },
  delieveryMethod: {
    type: String,
    default: "delivery",
    enum: ["delivery", "pickup"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
