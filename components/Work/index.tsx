import HorizontalScroll from "../HorizontalScroll";
import TitleWithText from "../TitleWithText";
import WorkItem from "./WorkItem";

import workData from "@/data/work.json";

const Work = () => {
  const { title, text, items: workItems } = workData;

  return (
    <div className="pb-14 lg:pb-20">
      <TitleWithText title={title} text={text} />
      <HorizontalScroll>
        {workItems?.map((project, i) => (
          <div key={`project-${i}`} className="w-screen h-screen">
            <WorkItem
              title={project?.title}
              intro={project?.intro}
              text={project?.text}
              image={project?.image}
              link={project?.link || null}
            />
          </div>
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default Work;
