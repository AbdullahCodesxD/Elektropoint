const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Collection title is required"],
    minLength: [4, "Collection name must at least be 4 characters long."],
    unique: [true, "A collection with this title already exists."],
  },
  description: {
    type: String,
    required: [true, "Collection description is required"],
    minLength: [
      20,
      "Collection description must at least be 20 characters long.",
    ],
  },

  media: {
    type: [String],
  },

  slug: {
    type: String,
    required: [true, "Collection slug is required"],
    unique: [true, "A collection with this name already exists"],
  },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
