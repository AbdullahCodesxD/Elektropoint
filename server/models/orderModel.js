const mongoose = require("mongoose");

// a counter schema to keep track of the order number
const counterSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

const Counter = mongoose.model("Counter", counterSchema);

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
  deliveryMethod: {
    type: String,
    default: "delivery",
    enum: ["delivery", "pickup"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orderNo: {
    type: Number,
    unique: true,
  },
});

// Pre-save middleware to assign a unique order number
orderSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: "orderNo" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.orderNo = counter.seq;
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
