import { useRef } from "react";
import { useAnimatedTitle } from "@/hooks/useAnimatedTitle";

function LargeTitle({ title }: { title: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useAnimatedTitle(titleRef);

  return (
    <h2 ref={titleRef} className={`large-title accent-color mb-3`}>
      {title}
    </h2>
  );
}

export default LargeTitle;
