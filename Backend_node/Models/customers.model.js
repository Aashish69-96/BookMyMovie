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
    required: true,
  },
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
