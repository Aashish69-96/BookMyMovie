import MovieCard from "./MovieCard";
const RunningNowSection = () => {
  return (
    <div className="mt-32">
      <p className=" text-theme-light-white font-bold text-2xl">Running Now</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
            <MovieCard></MovieCard>
      </div>
    </div>
  );
};
export default RunningNowSection;
