// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-10 container mx-auto"
      >
        <SwiperSlide>
          <img
            className="h-[500px] w-full rounded-xl relative"
            src="/FirstImage.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[500px] w-full rounded-xl relative"
            src="/SecondImage.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[500px] w-full rounded-xl relative"
            src="/ThirdImage.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
