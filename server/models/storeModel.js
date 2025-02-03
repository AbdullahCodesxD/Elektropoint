const mongoose = require("mongoose");
const validator = require("validator");

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of store is required"],
    unique: [true, "A store with this name already exists"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email of store is required"],
    validate: [validator.isEmail, "Please provide a valid email"],
    trim: true,
    lowercase: true,
  },
  address: String,
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
