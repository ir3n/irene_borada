"use client";

import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useTheme } from "next-themes";
import StackItem from "./StackItem";
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

interface SlideProps {
  splide: {
    refresh: () => void;
  };
}

const StackRow = ({ logos, changeDir, i }: Row) => {
  const [light, setLight] = useState(false);
  const sliderRef = useRef<SlideProps>(null);

  const { theme } = useTheme();

  useEffect(() => {
    setLight(theme === "light");
    if (sliderRef.current) sliderRef.current?.splide.refresh();
  }, [theme]);

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
      aria-label="Technologies logos"
      key={`stack-row-${i}`}
      extensions={{ AutoScroll }}
      ref={sliderRef}
    >
      {logos.map((item, i) => (
        <SplideSlide key={`stack-item-${i}`}>
          <StackItem
            name={item?.name}
            image={light && item?.lightImage ? item?.lightImage : item?.image}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default StackRow;
