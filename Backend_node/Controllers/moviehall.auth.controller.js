const MovieHall = require("../Models/moviehall.model");
const Hash = require("../Utilities/hashing.utility");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createMovieHall = async (req, res) => {
  try {
    let { name, email, password, location } = req.body;
    const newMovieHall = new MovieHall({
      name: name,
      email: email,
      password: await Hash.hashPassword(password),
      location: location,
    });

    const exisitingHall = await MovieHall.findOne({ email });
    if (exisitingHall) {
      return res.status(400).json({ error: "MovieHall already Exists!" });
    }
    const savedMovieHall = await newMovieHall.save();
    return res
      .status(201)
      .json({ msg: `created movie hall @${savedMovieHall.name}` });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getAllMovie = async (req, res) => {

  try {
    const getExisitingHall = await MovieHall.find();
    if (getExisitingHall) {
      return res.status(201).json({ data: getExisitingHall });
    }
    else {
      throw Error("No data available");
    }
  }
  catch (err) {
    return res.status(400).json({ error: err.message });
  }

}

module.exports = { createMovieHall, getAllMovie };
