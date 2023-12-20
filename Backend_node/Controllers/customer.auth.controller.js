const Customer = require("../Models/customers.model");
const Hash = require("../Utilities/hashing.utility");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createCustomer = async (req, res) => {
  try {
    let { username, email, password, displayname, premium } = req.body;
    const newCustomer = new Customer({
      username: username,
      email: email,
      password: await Hash.hashPassword(password),
      displayname: displayname,
      premium: premium ? true : false,
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

const loginCustomer = async (req, res) => {
  try {
    let { email, password, username } = req.body;
    const existingCustomer = await Customer.findOne({
      $or: [{ email }, { username }],
    });
    const customerData = {
      id: existingCustomer._id,
      username: existingCustomer.username,
      displayName: existingCustomer.displayname,
      premium: existingCustomer.premium,
      displayname: existingCustomer.displayname,
    };
    if (existingCustomer) {
      console.log("__----___");
      if (await Hash.comparePasswords(password, existingCustomer.password)) {
        const tokenPayload = {
          id: existingCustomer._id,
        };
        const accessToken = jwt.sign(tokenPayload, process.env.JWT_SECRET);
        res.status(201).json({
          status: "success",
          msg: `@${existingCustomer.username} logged in!`,
          data: {
            token: accessToken,
            ...customerData,
          },
        });
      } else {
        res.status(400).json({
          msg: "Incorrect Email or Password",
        });
      }
    } else {
      throw new Error("User not found!");
    }
  } catch (err) {
    res.status(401).json({
      status: "fail",
      msg: `SERVER ERROR 502 : ${err}`,
    });
  }
};

const authCustomer = async (req, res) => {
  return res.json({ status: true });
};

module.exports = { createCustomer, loginCustomer,authCustomer };
