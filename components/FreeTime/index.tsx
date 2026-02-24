"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import FreeTimeItem from "./FreeTimeItem";
import { GradientTitle } from "../GradientTitle";
import SlideFromBelow from "../SlideFromBelow";
import freeTimeData from "@/data/free-time.json";

const FreeTime = () => {
  const data = freeTimeData;
  const threeCol = useWindowWidth() > 1600;
  return (
    <div className="section">
      <div className="px-4 md:px-28 lg:px-52 xl:px-64">
        <SlideFromBelow>
          <GradientTitle>{data.title}</GradientTitle>
        </SlideFromBelow>

        <div className="grid gap-5 md:gap-10 xl:gap-y-20 md:grid-cols-2 xl:grid-cols-3 mt-2 lg:mt-6">
          {data?.items?.map((item, i) => (
            <FreeTimeItem
              key={`free-time-item-${i}`}
              title={item?.title}
              image={item?.image}
              alt={item?.alt}
              reverse={threeCol ? i % 3 === 1 : i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeTime;
