// import { useState } from "react";

const Burger: React.FC<{ open: boolean }> = ({ open }) => {
  //   const [hover, setHover] = useState(false);

  return (
    <>
      <div className={`${open ? "bg-dark" : "bg-accent"} h-0.5 w-10/12`}></div>
      <div
        className={`${
          open ? "bg-dark" : "bg-accent"
        } h-0.5 w-10/12 mt-3 lg:mt-5 ml-auto`}
      ></div>
    </>
  );
};

export default Burger;
