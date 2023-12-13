const express = require("express");
const router = express.Router();
const customerAuthController = require("../Controllers/customer.auth.controller");
const { authenticateJWT } = require("../Middlewares/auth.middleware");
router.post("/register", customerAuthController.createCustomer);
module.exports = router;
