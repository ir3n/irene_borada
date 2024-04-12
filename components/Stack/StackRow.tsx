"use client";

import StackItem from "./StackItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface StackLogo {
  name: string;
  image: string;
  lightImage?: string;
}

interface Row {
  logos: StackLogo[];
  changeDir: boolean;
  i: number;
}

const StackRow = ({ logos, changeDir, i }: Row) => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: changeDir,
    spaceBetween: 150,
    pauseOnHover: true,
    pauseOnFocus: true,
    touchThreshold: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          speed: 4500,
          spaceBetween: 100,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          speed: 4000,
          spaceBetween: 50,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          speed: 3500,
          spaceBetween: 20,
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Slider {...settings} key={`stack-row-${i}`}>
      {logos.map((item, i) => (
        <StackItem
          key={`stack-item-${i}`}
          name={item?.name}
          image={item?.image}
          lightImage={item?.lightImage}
        />
      ))}
    </Slider>
  );
};

export default StackRow;
