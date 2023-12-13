const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieBookingSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  hall: {
    type: Schema.Types.ObjectId,
    ref: "MovieHall",
    required: true,
  },
  seats: [
    {
      seat: {
        type: String,
        required: true,
      },
      bookedBy: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
      },
    },
  ],
});

const MovieBooking = mongoose.model("MovieBooking", movieBookingSchema);
module.exports = MovieBooking;
