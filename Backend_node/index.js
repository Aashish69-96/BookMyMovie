const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 1984;

// application
const app = express();

//cors setup
app.use(express.json());
const corsOptions = {
  origin: [
    "*",
    "http://localhost:5173/SignUp",
    "http://localhost:5173/Login",
    "http://localhost:5173",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // specify the allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization", // specify the allowed headers
  credentials: true, // enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
//routes
//customer routes
const customerRoutes = require("./Routers/customer.router");
app.use("/api/customers", customerRoutes);

const movieHallRouters = require("./Routers/moviehall.router");
app.use("/api/moviehall", movieHallRouters);

const movieRouters = require("./Routers/movie.router");
app.use("/api/movie", movieRouters);

const movieBookingRouters = require("./Routers/moviebooking.router");
app.use("/api/moviebooking", movieBookingRouters);

//mongodb connection
const mongoURI = process.env.URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("connected to the databse");
    app.listen(PORT, () => {
      console.log("server running at port number : ", PORT);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the db - ", err);
  });
