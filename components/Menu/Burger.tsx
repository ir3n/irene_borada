// import { useState } from "react";

const Burger: React.FC<{ open: boolean }> = ({ open }) => {
  //   const [hover, setHover] = useState(false);

  return (
    <div className="w-12 lg:w-24 cursor-pointer z-20 fixed right-[50px] top-[50px]">
      <div className={`${open ? "bg-dark" : "bg-accent"} h-0.5 w-10/12`}></div>
      <div
        className={`${
          open ? "bg-dark" : "bg-accent"
        } h-0.5 w-10/12 mt-3 lg:mt-5 ml-auto`}
      ></div>
    </div>
  );
};

export default Burger;
