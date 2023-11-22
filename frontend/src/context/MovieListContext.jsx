import React, { createContext, useState } from "react";
const MovieContext = createContext(null);
const MovieContextProvider = ({ children }) => {
  const [movieList, setMovieList] = useState({});
  return (
    <MovieContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </MovieContext.Provider>
  );
};
export { MovieContext, MovieContextProvider };
