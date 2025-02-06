const mongoose = require("mongoose");

const taxesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of tax is required"],
    unique: [true, "A tax with this name already exists"],
    trim: true,
    lowerCase: true,
  },
  country: {
    type: String,
    required: [true, "Country is required"],
    enum: ["switzerland", "others"],
    default: "switzerland",
  },
  percentage: {
    type: Number,
    required: [true, "Percentage is required"],
  },
  status: {
    type: String,
    default: "active",
    trim: true,
    lowerCase: true,

    enum: ["active", "draft"],
  },
});

const Taxes = mongoose.model("Taxes", taxesSchema);

module.exports = Taxes;
