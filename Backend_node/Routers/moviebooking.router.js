const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("../Middlewares/auth.middleware");
const movieBookingController = require("../Controllers/moviebooking.controller");

router.get("/getallmovie", movieBookingController.getAllCommingMovie);
router.get("/getmovies/:limit", movieBookingController.getUpCommingMovie);
router.get("/getmovie/:id", movieBookingController.getSingleMovie);
router.post("/addbooking", movieBookingController.addMovie);
router.post("/bookmovie", movieBookingController.bookMovie);
router.post("/purchase/:id", authenticateJWT, movieBookingController.purchaseMovie);
module.exports = router;
