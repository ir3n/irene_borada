import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

const SlideFromBelow = ({
  order = 0,
  children,
}: {
  order?: number;
  children: React.ReactNode;
}) => {
  const animateRef = useRef<HTMLDivElement>(null);

  const delayClasses = [
    "delay-0",
    "delay-[100ms]",
    "delay-[200ms]",
    "delay-[300ms]",
    "delay-[400ms]",
    "delay-[500ms]",
  ];

  const show = useIsVisible(animateRef);

  return (
    <div ref={animateRef} className="block relative overflow-hidden">
      <span
        className={`block [transition:transform_1000ms] ${
          delayClasses[order]
        } ${show ? "translate-y-0" : "translate-y-[100%]"} `}
      >
        {children}
      </span>
    </div>
  );
};

export default SlideFromBelow;
