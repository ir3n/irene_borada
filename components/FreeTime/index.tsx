import LargeTitle from "../LargeTitle";
import FreeTimeItem from "./FreeTimeItem";

export interface FreeTimeType {
  reverse?: boolean;
  title: string;
  image: string;
  alt: string;
}

interface Props {
  title: string;
  items: FreeTimeType[];
}

const FreeTime = ({ data }: { data: Props }) => {
  return (
    <div className="px-4 md:px-24 lg:px-52">
      <LargeTitle title={data.title} />

      <div className="sm:grid grid-cols-2 gap-x-5 md:gap-x-16 lg:gap-x-32 xl:gap-x-60">
        <div className="">
          {data?.items?.map((item, i) => {
            if (i % 2 === 0) {
              return (
                <FreeTimeItem
                  key={`free-time-item-${i}`}
                  title={item?.title}
                  image={item?.image}
                  alt={item?.alt}
                />
              );
            }
          })}
        </div>
        <div className="sm:mt-20 md:mt-40 lg:mt-64">
          {data?.items?.map((item, i) => {
            if (i % 2 !== 0) {
              return (
                <FreeTimeItem
                  key={`free-time-item-${i}`}
                  title={item?.title}
                  image={item?.image}
                  alt={item?.alt}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FreeTime;
