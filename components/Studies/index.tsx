"use client";

import { useEffect, useState } from "react";
import LargeTitle from "../LargeTitle";
import Study from "./Study";
import { useWindowWidth } from "@/hooks/useWindowWidth";

import studiesData from "@/data/studies.json";

const Studies = () => {
  const [oneColumn, setOneColumn] = useState(false);
  const oneCol = useWindowWidth() <= 1300;

  const data = studiesData;

  useEffect(() => {
    setOneColumn(oneCol);
  }, [oneCol]);

  return (
    <div className="section px-4 md:px-28 lg:px-52 xl:px-64">
      <LargeTitle title={data.title} />
      {oneColumn ? (
        <>
          {data?.items?.map((study, i) => {
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
        </>
      ) : (
        <div className="grid grid-cols-2 gap-x-[7%] xl:gap-x-[10%]">
          <div className="flex flex-col gap-5 lg:gap-20 xl:gap-40">
            {data?.items?.map((study, i) => {
              if (i % 2 === 0) {
                return (
                  <Study
                    key={`study-${i}`}
                    date={study?.date}
                    title={study?.title}
                    text={study?.text}
                    image={study?.image}
                  />
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-5 lg:gap-20 xl:gap-40 mt-80">
            {data?.items?.map((study, i) => {
              if (i % 2 !== 0) {
                return (
                  <Study
                    key={`study-${i}`}
                    date={study?.date}
                    title={study?.title}
                    text={study?.text}
                    image={study?.image}
                  />
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Studies;
