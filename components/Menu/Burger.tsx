import { useContext, useState } from "react";
import { MenuContext } from "@/providers/menu-provider";

const Burger = () => {
  const { open, setOpen } = useContext(MenuContext);

  const [hover, setHover] = useState(false);

  return (
    <div
      id="burger"
      onClick={() => {
        setOpen(!open);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="z-20 relative cursor-pointer flex items-center justify-center w-8 lg:w-24 h-10 lg:h-24"
    >
      <span className="hidden">{open ? "close menu" : "menu"}</span>
      <div
        className={`absolute hidden lg:block bg-${
          open ? "dark" : "accent"
        } rounded-full w-full h-full ${
          hover ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition duration-500`}
      ></div>
      <div
        className={`h-0.5 w-8 lg:w-16 transition duration-500 absolute top-[50%]  ${
          open
            ? "translate-y-[-0.125rem] rotate-[45deg] bg-dark"
            : "translate-y-[-0.46rem] lg:translate-y-[-0.75rem] bg-accent"
        } ${hover && "lg:bg-white"}`}
      ></div>
      <div
        className={`h-0.5 w-8 lg:w-16 transition duration-500 absolute bottom-[50%] bg-accent ${
          open
            ? "translate-y-0 rotate-[-45deg] bg-dark"
            : "translate-y-[0.46rem] lg:translate-y-[0.75rem] bg-accent"
        } ${hover && "lg:bg-white"}`}
      ></div>
    </div>
  );
};

export default Burger;
