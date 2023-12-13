const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieHallSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});
const MovieHall = mongoose.model("MovieHall", movieHallSchema);
module.exports = MovieHall;
