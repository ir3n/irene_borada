import HorizontalScroll from "../HorizontalScroll";
import FreeTimeItem from "./FreeTimeItem";

import freeTimeData from "@/data/free-time.json";

const FreeTime = () => {
  const data = freeTimeData;

  return (
    <div className="section">
      <HorizontalScroll title={data?.title}>
        {data?.items?.map((item, i) => (
          <FreeTimeItem
            key={`free-time-item-${i}`}
            reverse={i % 2 === 0}
            title={item?.title}
            image={item?.image}
            alt={item?.alt}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default FreeTime;
