"use client";

import StackItem from "./StackItem";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/dist/css/splide.min.css";

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
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        arrows: false,
        pagination: false,
        autoWidth: true,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: changeDir ? -1 : 1,
        },
      }}
      extensions={{ AutoScroll }}
      aria-label="Technologies logos"
      key={`stack-row-${i}`}
    >
      {logos.map((item, i) => (
        <SplideSlide key={`stack-item-${i}`} role="slider">
          <StackItem
            name={item?.name}
            image={item?.image}
            lightImage={item?.lightImage}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default StackRow;
