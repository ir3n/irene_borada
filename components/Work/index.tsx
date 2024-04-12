import HorizontalScroll from "../HorizontalScroll";
import WorkItem from "./WorkItem";

import workData from "@/data/work.json";

const Work = () => {
  const { items: workItems } = workData;

  return (
    <HorizontalScroll>
      {workItems?.map((project, i) => (
        <WorkItem
          key={`project-${i}`}
          title={project?.title}
          intro={project?.intro}
          text={project?.text}
          image={project?.image}
          link={project?.link || null}
        />
      ))}
    </HorizontalScroll>
  );
};

export default Work;
