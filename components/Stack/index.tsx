import StackRow from "./StackRow";
import stackData from "@/data/stack.json";

const Stack = () => {
  const stackRows = stackData;

  return (
    <div className="py-20 lg:py-32">
      {stackRows.map((row, i) => (
        <StackRow
          key={`stack-row-${i}`}
          logos={row?.items}
          dir={i % 2 === 0 ? "rtl" : "ltr"}
        />
      ))}
    </div>
  );
};

export default Stack;
