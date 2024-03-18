import HorizontalScroll from "../HorizontalScroll";
import Study from "./Study";

export interface StudyItem {
  date: string;
  title: string;
  text: string;
  image: string;
}

interface Props {
  title: string;
  items: StudyItem[];
}

const Studies = ({ data }: { data: Props }) => {
  return (
    <HorizontalScroll title={data?.title}>
      {data?.items?.map((study, i) => (
        <Study
          key={`study-${i}`}
          date={study?.date}
          title={study?.title}
          text={study?.text}
          image={study?.image}
        />
      ))}
    </HorizontalScroll>
  );
};

export default Studies;
