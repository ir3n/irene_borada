import HorizontalScroll from "../HorizontalScroll";
import FreeTimeItem from "./FreeTimeItem";

export interface FreeTimeType {
  reverse?: boolean;
  title: string;
  image: string;
  imageHover: string;
  alt: string;
}

interface Props {
  title: string;
  items: FreeTimeType[];
}

const FreeTime = ({ data }: { data: Props }) => {
  return (
    <HorizontalScroll title={data?.title}>
      {data?.items?.map((item, i) => (
        <FreeTimeItem
          key={`free-time-item-${i}`}
          reverse={i % 2 === 0}
          title={item?.title}
          image={item?.image}
          imageHover={item?.imageHover}
          alt={item?.alt}
        />
      ))}
    </HorizontalScroll>
  );
};

export default FreeTime;
