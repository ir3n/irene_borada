import HorizontalScroll from "../HorizontalScroll";
import FreeTimeItem from "./FreeTimeItem";

const FreeTime = () => {
  return (
    <HorizontalScroll title={"Free Time"}>
      <FreeTimeItem />
      <FreeTimeItem reverse={true} />
      <FreeTimeItem />
      <FreeTimeItem reverse={true} />
      <FreeTimeItem />
    </HorizontalScroll>
  );
};

export default FreeTime;
