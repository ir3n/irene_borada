import StackItem from "./StackItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Direction } from ".";

export interface StackLogo {
  name: string;
  image: string;
  lightImage?: string;
}

interface Row {
  logos: StackLogo[];
  dir: Direction;
}

const StackRow = ({ logos, dir = Direction.toRight }: Row) => {
  return (
    <Swiper
      slidesPerView={3}
      dir={dir}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      speed={3500}
      loop={true}
      modules={[Autoplay]}
      allowTouchMove={true}
      touchStartPreventDefault={false}
      breakpoints={{
        768: {
          speed: 4000,
          spaceBetween: 50,
          slidesPerView: 4,
        },
        1024: {
          speed: 4500,
          spaceBetween: 100,
          slidesPerView: 5,
        },
        1450: {
          spaceBetween: 150,
          speed: 6000,
          slidesPerView: 6,
        },
      }}
      className="logos-swiper"
    >
      {logos.map((item, i) => (
        <SwiperSlide key={`stack-item-${i}`}>
          <StackItem
            name={item?.name}
            image={item?.image}
            lightImage={item?.lightImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StackRow;
