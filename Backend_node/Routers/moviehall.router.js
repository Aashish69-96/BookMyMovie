const express = require("express");
const router = express.Router();
const movieHallController = require("../Controllers/moviehall.auth.controller");
router.post("/register", movieHallController.createMovieHall);
module.exports = router;
