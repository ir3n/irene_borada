"use client";

import LargeTitle from "../LargeTitle";
import Study from "./Study";

import studiesData from "@/data/studies.json";

const Studies = () => {
  const data = studiesData;
  const itemsLeft = data?.items?.slice(0, data?.items?.length / 2);
  const itemsRight = data?.items?.slice(
    data?.items?.length / 2,
    data?.items?.length
  );

  return (
    <div className="section px-4 md:px-28 lg:px-52 xl:px-64">
      <LargeTitle title={data.title} />

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-[5%] xl:gap-x-[10%]">
        <div className="flex flex-col gap-5 lg:gap-20 xl:gap-40 mb-5 lg:mb-0">
          {itemsLeft?.map((study, i) => {
            return (
              <Study
                key={`study-${i}`}
                date={study?.date}
                title={study?.title}
                text={study?.text}
                image={study?.image}
                even={i % 2 === 0}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5 lg:gap-20 xl:gap-40 lg:mt-80">
          {itemsRight?.map((study, i) => {
            return (
              <Study
                key={`study-${i}`}
                date={study?.date}
                title={study?.title}
                text={study?.text}
                image={study?.image}
                even={i % 2 !== 0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Studies;
