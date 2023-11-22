import { Outlet } from "react-router-dom";
import RunningNowSection from "./components/MovieList/RunningNowSection";
import MovieSlider from "./components/movieSlider/MovieSlider";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="mx-auto w-full max-w-screen-md py-3 lg:max-w-screen-xl">
      <Navigation></Navigation>
      <div className="h-24 w-full bg-theme-dark sticky top-0 left-0 z-10"></div>
      <Outlet/>
    </div>
  );
}
export default App;
