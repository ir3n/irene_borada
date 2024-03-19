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
      className="z-20 relative cursor-pointer"
    >
      <div
        className={`${
          open ? "bg-dark ml-auto" : "bg-accent"
        }  h-0.5 w-10/12 transition duration-500`}
      ></div>
      <div
        className={`${
          open ? "bg-dark " : "bg-accent ml-auto"
        } h-0.5 w-10/12 mt-3 lg:mt-5 transition duration-500`}
      ></div>
    </div>
  );
};

export default Burger;
