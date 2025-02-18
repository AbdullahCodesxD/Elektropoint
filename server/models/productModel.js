const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  // Basic Product Details
  title: {
    type: String,
    required: [true, "Product title is required"],
    minLength: [4, "Product name must be at least 4 characters long."],
    unique: [true, "A product with this title already exists."],
  },
  slug: {
    type: String,
    required: [true, "Product slug is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  media: {
    type: [String],
    required: [true, "Media files are required for product."],
    minLength: [1, "Product must have at least one media file."],
  },

  // Inventory & Pricing
  price: {
    type: Number,
    default: 0,
  },
  inventory: {
    type: Number,
  },
  box: {
    type: Boolean,
    default: false,
  },
  boxes: {
    type: Number,
    max: 9,
  },

  // Product Classification
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection",
  },
  tags: {
    type: [String],
  },
  productType: String,
  vendor: String,
  brand: String,
  color: String,

  // Supplier Info
  supplierNo: String,
  eldasNo: String,

  // Status
  status: {
    type: String,
    default: "active",
    enum: ["active", "draft"],
  },

  // SEO & Metadata
  metaTitle: String,
  metaDescription: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
