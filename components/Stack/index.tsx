import StackItem from "./StackItem";
import workData from "@/data/work.json";

const Stack = () => {
  const stackItems = workData.stack;

  return (
    <div className="h-screen">
      {stackItems.map((item, i) => (
        <StackItem
          key={`stack-item-${i}`}
          name={item?.name}
          image={item?.image}
        />
      ))}
    </div>
  );
};

export default Stack;
