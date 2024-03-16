import HorizontalScroll from "../HorizontalScroll";
import Study from "./Study";

const Studies = () => {
  return (
    <HorizontalScroll title={"Studies"}>
      <Study />
      <Study />
      <Study />
    </HorizontalScroll>
  );
};

export default Studies;
