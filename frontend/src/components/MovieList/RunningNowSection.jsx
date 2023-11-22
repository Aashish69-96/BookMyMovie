import MovieCard from "./MovieCard";
const RunningNowSection = ({ movieList }) => {
  return (
    <div className="mt-32">
      <p className=" text-theme-light-white font-bold text-2xl">Running Now</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
        {movieList.map((movieDetail) => {
          return <MovieCard movieDetail={movieDetail} key={movieDetail.id}></MovieCard>;
        })}
      </div>
    </div>
  );
};
export default RunningNowSection;
