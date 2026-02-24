import { useContext } from "react";
import { useScramble } from "use-scramble";

import { MenuContext } from "@/providers/menu-provider";

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    typeof window !== "undefined" && window?.scrollTo(0, 0);
  };

  return (
    <button
      onClick={handleClick}
      onMouseOver={replay}
      type="button"
      aria-label="Irene Borada Logo"
    >
      <div
        aria-hidden="true"
        className={` relative text-[1.3rem] lg:text-xl leading-none lg:leading-none pl-3 pr-4 lg:pr-5 pb-[0.1rem] w-[7.1rem] lg:w-[6.75rem]`}
      >
        <div className="absolute font-light left-0">{"<"}</div>
        <div className="font-light">Irene</div>
        <div
          className={`${
            mobile && open ? "text-dark" : "text-accent"
          } font-bold transition-colors duration-500`}
        >
          <div ref={ref}>Borada</div>
        </div>
        <div className="absolute font-light right-0 bottom-0">{"/>"}</div>
      </div>
    </button>
  );
};
export default Logo;
