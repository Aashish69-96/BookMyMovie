const MovieCard = ({ movieDetail }) => {
  return (
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
  );
};

export default MovieCard;
