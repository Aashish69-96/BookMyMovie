import { Link } from "react-router-dom";
const MovieCard = ({ movieDetail }) => {
  return (
    <Link to={`/movie/${movieDetail._id}`}>
      <div className="cursor-pointer movieCard">
        <div className="mb-3">
          <img src={movieDetail.movie.image} className="cardImage"></img>
        </div>
        <p className="text-theme-light-white font-semibold">
          {movieDetail.movie.name}
        </p>
        <p className="text-gray-500 text-sm">
          {movieDetail.hall.name}, {movieDetail.hall.location}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
