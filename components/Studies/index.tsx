"use client";

import { useEffect, useState } from "react";
import LargeTitle from "../LargeTitle";
import Study from "./Study";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export interface StudyItem {
  date: string;
  title: string;
  text: string;
  image: string;
  even?: boolean;
}

interface Props {
  title: string;
  items: StudyItem[];
}

const Studies = ({ data }: { data: Props }) => {
  const [oneColumn, setOneColumn] = useState(false);
  const oneCol = useWindowWidth() <= 1300;

  useEffect(() => {
    setOneColumn(oneCol);
  }, [oneCol]);

  return (
    <div className="px-4 md:px-24 lg:px-52">
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
        <div className="grid grid-cols-2 gap-x-[10%]">
          <div>
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
          <div className="mt-80">
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
