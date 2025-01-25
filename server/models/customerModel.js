const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer name is required"],
    minLength: [4, "Customer name must at least be 4 characters long."],
  },
  email: {
    type: String,
    required: [true, "Customer email is required"],
    unique: [true, "A customer with this email already exists."],
  },
  address: String,
  comment: String,
  emailSubscription: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
