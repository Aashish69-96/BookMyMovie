import { BiSolidTime } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { BsCalendarWeekFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { TbWorldLongitude } from "react-icons/tb";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const Slide = () => {
  return (
    <div className="MovieSlider relative ">
      <img
        src="https://assetsio.reedpopcdn.com/MarvelsHeader_rUbTNsM.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
        className="SlideImage rounded-lg w-full"
      ></img>
      <div class="gradient-overlay"></div>
      <div className="absolute SlideDescription">
        <div className="text-4xl font-bold text-theme-white mb-5">
          Spider-Man Across The Spider-Verse
        </div>
        <div className="flex flex-col text-theme-light-blue font-bold">
          <div className="flex flex-row gap-5 mb-3">
            <p className="SlideDesPrimary ">
              <MdCategory />{" "}
              <span className="text-theme-light-white">Action/Thriller</span>
            </p>
            <p className="SlideDesPrimary">
              <BsCalendarWeekFill></BsCalendarWeekFill>{" "}
              <span className=" text-theme-light-white">03-06-2023</span>
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <p className="SlideDesPrimary">
              <BiSolidTime />
              <span className="text-theme-light-white">2h 15m</span>
            </p>
            <p className="SlideDesPrimary">
              <TbWorldLongitude />
              <span className=" text-theme-light-white">English,Nepali</span>
            </p>
            <p className="SlideDesPrimary">
              <MdHighQuality></MdHighQuality>{" "}
              <span className=" text-theme-light-white">QFX Cinema Butwal</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-row gap-4">
          <PrimaryButton link={"/"} value={"Book Now"}></PrimaryButton>
          <SecondaryButton link={"/"} value={"Watch Trailer"}></SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Slide;
