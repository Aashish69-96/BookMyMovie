import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [location, setLocation] = useState(null);
  const [nearbyMovies, setNearbyMovies] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => setLocation(data));
    };
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/moviebooking/getallmovie"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovieData();
    fetchLocation();
    const nearbyMovies = movieList.filter((movie) =>
      movie.hall.location.includes(location.city)
    );
    setNearbyMovies(nearbyMovies);
  }, []);

  return (
    <div>
      <section className="flex flex-col mb-10">
        <p className=" text-theme-light-white font-bold text-xl mb-2">
          Movie Running Near You
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {nearbyMovies.map((movieDetail) => (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.9}
              glareColor="lightblue"
              glarePosition="all"
            >
              <Link to={`/movie/${movieDetail._id}`} key={movieDetail._id}>
                <div className="cursor-pointer movieCard bg-theme-dark border-2 border-theme-light-dark-2 shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row">
                  <div className="p-4">
                    <img
                      src={movieDetail.movie.image}
                      className="h-20 w-20 bg-cover object-cover rounded-lg"
                      alt={movieDetail.movie.name}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-theme-light-white font-semibold text-lg">
                      {movieDetail.movie.name}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Seats Available :{" "}
                      <span className="font-bold bg-theme-light-blue px-3 py-1/5 rounded-lg text-white">
                        {100 - movieDetail.seats.length}
                      </span>
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {movieDetail.hall.name}, {movieDetail.hall.location}
                    </p>
                  </div>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
      </section>
      <section className="flex flex-col mb-10">
        <p className=" text-theme-light-white font-bold text-xl mb-2">
          Other Movies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {movieList.map((movieDetail) => (
            <Link to={`/movie/${movieDetail._id}`} key={movieDetail._id}>
              <div className="cursor-pointer movieCard bg-theme-light-dark border-2 border-theme-light-dark-2 shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row">
                <div className="p-4">
                  <img
                    src={movieDetail.movie.image}
                    className="h-20 w-20 bg-cover object-cover rounded-lg"
                    alt={movieDetail.movie.name}
                  />
                </div>
                <div className="p-4">
                  <p className="text-theme-light-white font-semibold text-lg">
                    {movieDetail.movie.name}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Seats Available :{" "}
                    <span className="font-bold bg-theme-light-blue px-3 py-1/5 rounded-lg text-white">
                      {100 - movieDetail.seats.length}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {movieDetail.hall.name}, {movieDetail.hall.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieList;
