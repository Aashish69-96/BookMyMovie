import RunningNowSection from "../components/MovieList/RunningNowSection";
import MovieSlider from "../components/movieSlider/MovieSlider";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MovieContext } from "../context/MovieListContext";

const Index = () => {
  const { movieList } = useContext(MovieContext);
  console.log(movieList);

  return (
    <React.Fragment>
      <ToastContainer />
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
