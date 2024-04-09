"use client";

import { useContext } from "react";
import { MenuContext } from "@/providers/menu-provider";

import { useScramble } from "use-scramble";

import { useWindowWidth } from "@/hooks/useWindowWidth";

const Logo = () => {
  const { ref, replay } = useScramble({
    text: "Borada",
    speed: 1,
    tick: 5,
    step: 1,
    overflow: true,
    scramble: 10,
    seed: 0,
    overdrive: false,
  });

  const { open } = useContext(MenuContext);

  const mobile = useWindowWidth() < 768;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    typeof window !== "undefined" && window?.scrollTo(0, 0);
  };

  return (
    <div onClick={handleClick} onMouseOver={replay}>
      <div
        className={`${
          mobile && open ? "text-white" : "text-inherit"
        } relative text-2xl lg:text-xl leading-none lg:leading-none pl-3 pr-4 lg:pr-5 pb-[0.1rem] w-[8rem] lg:w-[6.75rem]`}
      >
        <div className="absolute font-light left-0">{"<"}</div>
        <div className={`font-light `}>Irene</div>
        <div
          className={`${
            mobile && open ? "text-dark" : "text-accent"
          } font-bold`}
        >
          <div ref={ref}>Borada</div>
        </div>
        <div className="absolute font-light right-0 bottom-0">{"/>"}</div>
      </div>
    </div>
  );
};
export default Logo;
