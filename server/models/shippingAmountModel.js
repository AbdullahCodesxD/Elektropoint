const mongoose = require("mongoose");

const shippingAmountSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Shipping amount name is required"],
    unique: [true, "A shipping amount with this name already exists"],
  },
  type: {
    type: String,
    default: "fixed",
    enum: ["fixed", "dynamic"],
    required: [true, "Shipping amount type is required"],
  },
  amount: {
    type: Number,
  },
  dynamicAmount: {
    type: [Object],
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "draft"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
    enum: ["switzerland", "others"],
    default: "switzerland",
    trim: true,
    lowerCase: true,
  },
});

const ShippingAmount = mongoose.model("ShippingAmount", shippingAmountSchema);

module.exports = ShippingAmount;
