import RunningNowSection from "../components/MovieList/RunningNowSection";
import MovieSlider from "../components/movieSlider/MovieSlider";
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieListContext";

const Index = () => {
  const { movieList } = useContext(MovieContext);
  console.log(movieList);

  return (
    <React.Fragment>
      <MovieSlider></MovieSlider>
      {Array.isArray(movieList) && movieList.length > 0 ? (
        <RunningNowSection movieList={movieList}></RunningNowSection>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default Index;
