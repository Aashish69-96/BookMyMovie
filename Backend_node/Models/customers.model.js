const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    default: false,
    required: true,
  },
  limit: {
    type: Number,
    default: 3,
    required: true,
  },
  limitedate: {
    type: Number,
    default: 0,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  verificationToken: {
    type: String,
    required: true,
  },
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
