import StackRow from "./StackRow";
import stackData from "@/data/stack.json";

const Stack = () => {
  const stackRows = stackData;

  return (
    <div
      className="cursor-grab lg:my-20 max-h-[400px] overflow-hidden"
      data-cursor-text="drag"
    >
      {stackRows.map((row, i) => (
        <StackRow
          key={`stack-row-${i}`}
          logos={row?.items}
          changeDir={i % 2 === 0 ? true : false}
          i={i}
        />
      ))}
    </div>
  );
};

export default Stack;
