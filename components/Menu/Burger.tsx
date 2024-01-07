// import { useState } from "react";

const Burger = () => {
  //   const [hover, setHover] = useState(false);

  return (
    <div className="w-12 lg:w-24 cursor-pointer">
      <div className="bg-accent h-0.5 w-10/12"></div>
      <div className="bg-accent h-0.5 w-10/12 ml-auto mt-3 lg:mt-5"></div>
    </div>
  );
};

export default Burger;
