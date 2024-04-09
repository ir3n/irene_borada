import { useContext, useState, useEffect } from "react";
import { MenuContext } from "@/providers/menu-provider";

import { useWindowWidth } from "@/hooks/useWindowWidth";

import { CurrentSectionContext } from "@/providers/currentSection-provider";

const Burger = () => {
  const { open, setOpen } = useContext(MenuContext);
  const { top, bottom } = useContext(CurrentSectionContext);

  const [hover, setHover] = useState(false);

  const isMobile = useWindowWidth() < 1025;

  useEffect(() => {
    if (!isMobile) {
      return;
    }
    setHover(!(top || bottom));
  }, [isMobile, bottom, top]);

  return (
    <div
      id="burger"
      onClick={() => {
        setOpen(!open);
      }}
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => !isMobile && setHover(false)}
      className="z-30 relative cursor-pointer flex items-center justify-center w-9 lg:w-24 h-11 lg:h-24"
    >
      <span className="hidden">{open ? "close menu" : "menu"}</span>
      <div
        className={`absolute block ${
          open ? "bg-dark" : "bg-accent"
        } rounded-full w-[150%] lg:w-full h-[115%] lg:h-full ${
          hover ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition duration-500`}
      ></div>
      <div
        className={`h-0.5 w-9 lg:w-16 transition duration-500 absolute top-[50%]  ${
          open
            ? "translate-y-[-0.125rem] rotate-[45deg] bg-dark"
            : "translate-y-[-0.46rem] lg:translate-y-[-0.75rem] bg-accent"
        } ${hover && "bg-white"}`}
      ></div>
      <div
        className={`h-0.5 w-9 lg:w-16 transition duration-500 absolute bottom-[50%] bg-accent ${
          open
            ? "translate-y-0 rotate-[-45deg] bg-dark"
            : "translate-y-[0.46rem] lg:translate-y-[0.75rem] bg-accent"
        } ${hover && "bg-white"}`}
      ></div>
    </div>
  );
};

export default Burger;
