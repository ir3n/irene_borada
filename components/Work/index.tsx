import React from "react";
import HorizontalScroll from "../HorizontalScroll";
import TitleWithText from "../TitleWithText";
import WorkItem from "./WorkItem";

export interface Project {
  title: string;
  intro: string;
  text: string;
  image: string;
  link: string | null;
}

interface Props {
  title: string;
  text: string;
  items: Project[];
}

export const Work = ({ data }: { data: Props }) => {
  return (
    <>
      <TitleWithText data={{ title: data?.title, text: data?.text }} />
      <HorizontalScroll>
        {data?.items?.map((project, i) => (
          <div key={`project-${i}`} className="w-screen">
            <WorkItem
              title={project?.title}
              intro={project?.intro}
              text={project?.text}
              image={project?.image}
              link={project?.link}
            />
          </div>
        ))}
      </HorizontalScroll>
    </>
  );
};
