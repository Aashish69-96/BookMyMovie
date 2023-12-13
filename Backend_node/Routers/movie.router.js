const express = require("express");
const router = express.Router();
const movieController = require("../Controllers/movie.controller");
router.post("/add", movieController.addMovie);
module.exports = router;
