import React, { useEffect, useContext } from "react";
import { MovieContext } from "./context/MovieListContext";
import Navigation from "./components/navigation/Navigation";
import MovieList from "./Utility/MovieList";
import { Outlet } from "react-router-dom";

function App() {
  const {movieList, setMovieList } = useContext(MovieContext);

  useEffect(() => {
    setMovieList(MovieList);
    console.log(movieList)
  }, [movieList]);

  return (
    <div className="mx-auto w-full max-w-screen-md py-3 lg:max-w-screen-xl">
      <Navigation></Navigation>
      <div className="h-24 w-full bg-theme-dark sticky top-0 left-0 z-10"></div>
      <Outlet />
    </div>
  );
}

export default App;
