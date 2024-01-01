const express = require("express");
const router = express.Router();
const customerAuthController = require("../Controllers/customer.auth.controller");
const { authenticateJWT } = require("../Middlewares/auth.middleware");
router.post("/register", customerAuthController.createCustomer);
router.post("/checkauth", authenticateJWT, customerAuthController.authCustomer);
router.post("/login", customerAuthController.loginCustomer);
router.get("/verify", customerAuthController.verifyEmail);
module.exports = router;
