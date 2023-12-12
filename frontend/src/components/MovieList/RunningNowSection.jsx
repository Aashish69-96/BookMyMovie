import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
const RunningNowSection = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const allMoviesData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/moviebooking/getallmovie"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setMovieList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    allMoviesData();
  }, []);

  return (
    <div className="mt-32">
      <p className=" text-theme-light-white font-bold text-2xl">Running Now</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
        {movieList.map((movieDetail) => {
          console.log(movieDetail);
          return (
            <MovieCard
              movieDetail={movieDetail}
              key={movieDetail._id}
            ></MovieCard>
          );
          // <MovieCard
          //   movieDetail={movieDetail}
          //   key={movieDetail._id}
          // ></MovieCard>
        })}
      </div>
    </div>
  );
};
export default RunningNowSection;
