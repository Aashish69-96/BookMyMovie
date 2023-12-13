const Customer = require("../Models/customers.model");
const Hash = require("../Utilities/hashing.utility");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createCustomer = async (req, res) => {
  try {
    let { username, email, password, displayname } = req.body;
    const newCustomer = new Customer({
      username: username,
      email: email,
      password: await Hash.hashPassword(password),
      displayname: displayname,
      premium: false,
    });

    const existingCustomer = await Customer.findOne({
      $or: [{ email }, { username }],
    });
    if (existingCustomer) {
      return res.status(400).json({ error: "Customer already Exists!" });
    }
    const savedCustomer = await newCustomer.save();
    return res
      .status(201)
      .json({ msg: `created user @${savedCustomer.username}` });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = { createCustomer };
