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
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
