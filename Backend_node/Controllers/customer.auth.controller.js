const Customer = require("../Models/customers.model");
const Hash = require("../Utilities/hashing.utility");
const jwt = require("jsonwebtoken");
const {
  sendVerificationEmail,
} = require("../Middlewares/verification.middleware");
require("dotenv").config();
const crypto = require("crypto");

// const { sendemailonlogin } = require("./verification");

const createCustomer = async (req, res) => {
  try {
    let { username, email, password, displayname } = req.body;
    // console.log(username, email, password, displayname);
    const awaitingVerificationUser = await Customer.findOne({
      email,
      verified: false,
    });
    if (awaitingVerificationUser) {
      await sendVerificationEmail(awaitingVerificationUser);
      return res.status(400).json({
        msg: "Email is not verified. Verification email sent again.",
      });
    }
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const newCustomer = new Customer({
      username: username,
      email: email,
      password: await Hash.hashPassword(password),
      displayname: displayname,
      premium: false,
      verified: false,
      verificationToken: verificationToken,
    });

    const existingCustomer = await Customer.findOne({
      $or: [{ email }, { username }],
      verified: true,
    });

    if (existingCustomer) {
      return res.status(400).json({ error: "Customer already Exists!" });
    }
    const savedCustomer = await newCustomer.save();
    await sendVerificationEmail(savedCustomer);
    // console.log(savedCustomer);
    return res.status(201).json({
      msg: `created user @${savedCustomer.username}`,
      sup: `Check Email For Verification`,
    });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const loginCustomer = async (req, res) => {
  try {
    let { email, password, username } = req.body;
    // console.log(email);
    const existingCustomer = await Customer.findOne({
      $or: [{ email }, { username }],
    });

    if (!existingCustomer) {
      throw new Error("User not found!");
    }

    if (!existingCustomer.verified) {
      return res.status(401).json({
        status: "fail",
        msg: `User not verified. Please check your email for the verification link.`,
      });
    }

    // console.log(existingCustomer);
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
        // await sendemailonlogin(useremail, res);
        const accessToken = jwt.sign(tokenPayload, process.env.JWT_SECRET);
        return res.status(201).json({
          status: "success",
          msg: `@${existingCustomer.username} logged in!`,
          data: {
            token: accessToken,
            ...customerData,
          },
        });
      } else {
        return res.status(400).json({
          msg: "Incorrect Email or Password",
        });
      }
    } else {
      throw new Error("User not found!");
    }
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      msg: `User Not Found`,
    });
  }
};

const authCustomer = async (req, res) => {
  return res.json({ status: true });
};

const verifyEmail = async (req, res) => {
  try {
    const token = req.query.token;
    const user = await Customer.findOne({ verificationToken: token });

    if (user) {
      user.verified = true;
      user.verificationToken = null;
      await user.save();
      return res.status(201).send("Successfully Verified");
    } else {
      return res.status(400).send("Invalid or expired verification token.");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { createCustomer, loginCustomer, authCustomer, verifyEmail };
