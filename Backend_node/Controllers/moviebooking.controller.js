const MovieBooking = require("../Models/moviebooking.model");
const MovieHall = require("../Models/moviehall.model");
const Movie = require("../Models/movies.model");
const getUpCommingMovie = async (req, res) => {
  try {
    const currentDate = new Date();
    const limit = parseInt(req.params.limit);
    const upcomingMovieBookings = await MovieBooking.find({
      //greater than or equal to current date
      date: { $gte: currentDate },
    })
      .limit(limit)
      .populate("movie hall seats.bookedBy");

    res.json(upcomingMovieBookings);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCommingMovie = async (req, res) => {
  try {
    const currentDate = new Date();
    const allUpcomingMovieBookings = await MovieBooking.find({
      date: { $gte: currentDate },
    }).populate("movie hall seats.bookedBy");
    res.json(allUpcomingMovieBookings);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const isValidMovieBookingId = async (id) => {
  try {
    const movieBooking = await MovieBooking.findById(id);
    return !!movieBooking;
  } catch (error) {
    return false;
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const movieBookingId = req.params.id;

    if (!isValidMovieBookingId(movieBookingId)) {
      return res.status(400).json({ error: "Invalid movie booking ID" });
    }

    const movieDetail = await MovieBooking.findOne({
      _id: movieBookingId,
    }).populate("movie hall seats.bookedBy");

    if (!movieDetail) {
      return res.status(404).json({ error: "Movie booking not found" });
    }

    res.json(movieDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addMovie = async (req, res) => {
  try {
    const { hallId, movieId, date, seats } = req.body;

    // Validate input fields
    if (!hallId || !movieId) {
      return res
        .status(400)
        .json({ error: "Both hallId and movieId are required" });
    }

    const existingHall = await MovieHall.findById(hallId);
    if (!existingHall) {
      return res.status(404).json({ error: "Movie hall not found" });
    }

    const existingMovie = await Movie.findById(movieId);
    if (!existingMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const bookingDate = date ? new Date(date) : new Date();

    const newMovieBooking = new MovieBooking({
      date: bookingDate,
      movie: existingMovie._id,
      hall: existingHall._id,
      seats: [...seats],
    });

    const savedMovieBooking = await newMovieBooking.save();
    res.status(201).json(savedMovieBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const bookMovie = async (req, res) => {
  try {
    const { movieBookingId, userId, bookedSeats } = req.body;

    // Validate input fields
    if (!movieBookingId || !userId || !bookedSeats || !bookedSeats.length) {
      return res.status(400).json({ error: "Invalid request parameters" });
    }

    const existingMovieBooking = await MovieBooking.findById(movieBookingId);
    if (!existingMovieBooking) {
      return res.status(404).json({ error: "Movie booking not found" });
    }

    //if user exists or not
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    //update the booking status
    existingMovieBooking.seats.forEach((seat) => {
      if (bookedSeats.includes(seat._id.toString())) {
        seat.isBooked = true;
        seat.bookedBy = existingUser._id;
      }
    });

    const updatedMovieBooking = await existingMovieBooking.save();

    res.status(200).json(updatedMovieBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getUpCommingMovie,
  getAllCommingMovie,
  addMovie,
  bookMovie,
  getSingleMovie,
};
