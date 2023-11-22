import RunningNowSection from "../components/MovieList/RunningNowSection";
import MovieSlider from "../components/movieSlider/MovieSlider";
import React from "react";
const Index = () => {
  return (
    <React.Fragment>
      <MovieSlider></MovieSlider>
      <RunningNowSection></RunningNowSection>
    </React.Fragment>
  );
};
export default Index;
