import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import Slide from "./Slide";
import { useState, useEffect } from "react";

const MovieSlider = () => {
  const [movieSliderList, setMovieSliderList] = useState([]);

  const handleSlideChange = (swiper) => {};

  useEffect(() => {
    const movieSlideData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/moviebooking/getmovies/5"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setMovieSliderList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    movieSlideData();
  }, []);

  return (
    <div className="SliderContainer">
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: -10,
          stretch: -10,
          depth: -100,
          modifier: -10,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={-100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {movieSliderList.map((item) => {
          return (
            <SwiperSlide>
              <Slide details={item}></Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default MovieSlider;
