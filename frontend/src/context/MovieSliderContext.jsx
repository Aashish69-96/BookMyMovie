import { createContext } from 'react';
const MovieSliderContext = createContext({
  movies: [],
  setMovies: () => {},
});

export default MovieSliderContext;
