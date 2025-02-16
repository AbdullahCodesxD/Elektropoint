const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
    minLength: [4, "Product name must at least be 4 characters long."],
    unique: [true, "A product with this title already exists."],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    minLength: [20, "Product description must at least be 20 characters long."],
  },
  media: {
    type: [String],
    required: [true, "Media files are required for product."],
    minLength: [1, "Product must have at least one media file."],
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "draft"],
  },

  slug: {
    type: String,
    required: [true, "Product slug is required"],
  },

  inventory: Number,
  price: {
    type: Number,
    default: 0,
  },
  box: {
    type: Boolean,
    default: false,
  },

  metaTitle: String,
  metaDescription: String,
  productType: String,
  vendor: String,

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection",
  },
  tags: {
    type: [String],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
