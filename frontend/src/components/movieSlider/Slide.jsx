import { BiSolidTime } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { BsCalendarWeekFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { TbWorldLongitude } from "react-icons/tb";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const Slide = ({ details }) => {

  function filterTime(date) {

    const yourDate = new Date(date);
    const formattedDate = yourDate.toLocaleDateString();
    return formattedDate;
  }


  return (
    <div className="MovieSlider relative ">
      <img
        src={details.movie.image}
        className="SlideImage rounded-lg w-full"
      ></img>
      <div class="gradient-overlay"></div>
      <div className="absolute SlideDescription">
        <div className="text-4xl font-bold text-theme-white mb-5">
          {details.movie.name}
        </div>
        <div className="flex flex-col text-theme-light-blue font-bold">
          <div className="flex flex-row gap-5 mb-3">
            <p className="SlideDesPrimary ">
              <MdCategory />{" "}
              <span className="text-theme-light-white">
                {details.movie.category}
              </span>
            </p>
            <p className="SlideDesPrimary">
              <BsCalendarWeekFill></BsCalendarWeekFill>{" "}
              <span className=" text-theme-light-white">{filterTime(details.date)}</span>
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <p className="SlideDesPrimary">
              <BiSolidTime />
              <span className="text-theme-light-white">
                {details.movie.duration}
              </span>
            </p>
            <p className="SlideDesPrimary">
              <TbWorldLongitude />
              <span className=" text-theme-light-white">
                {details.movie.language}
              </span>
            </p>
            <p className="SlideDesPrimary">
              <MdHighQuality></MdHighQuality>{" "}
              <span className=" text-theme-light-white">
                {details.hall.name}, {details.hall.location}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-row gap-4">
          <PrimaryButton link={"/"} value={"Book Now"}></PrimaryButton>
          <SecondaryButton
            link={details.movie.trailer}
            value={"Watch Trailer"}
          ></SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Slide;
