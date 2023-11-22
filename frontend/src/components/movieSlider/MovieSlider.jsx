import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation,EffectCoverflow, Pagination } from "swiper/modules";
import Slide from "./Slide";

const MovieSlider = () => {
  const handleSlideChange = (swiper) => {
  };

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
        modules={[EffectCoverflow, Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
        <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MovieSlider;
