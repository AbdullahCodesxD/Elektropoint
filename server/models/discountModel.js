const mongoose = require("mongoose");

const discountSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Discount name is required"],
    unique: [true, "A discount with this name already exists"],
  },

  percentage: {
    type: Number,
    required: [true, "Percentage is required"],
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "draft"],
  },

  combination: {
    type: Boolean,
    default: false,
  },
  noOfTimesUsed: {
    type: Number,
    default: 0,
  },
});

const Discount = mongoose.model("Discount", discountSchema);
module.exports = Discount;
