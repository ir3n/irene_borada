import { useState, useContext, useEffect } from "react";
import { MenuContext } from "@/providers/menu-provider";

import MenuItem from "./MenuItem";

import menuData from "@/data/menu.json";

const MenuList = () => {
  const { open } = useContext(MenuContext);

  const delay = [
    "delay-[100ms]",
    "delay-[200ms]",
    "delay-[300ms]",
    "delay-[400ms]",
    "delay-[500ms]",
  ];

  return (
    <>
      <div
        className={`fixed top-0 right-0 bg-accent w-full md:w-1/2 lg:w-2/5 h-screen duration-500 origin-right ${
          open ? "scale-x-100 rounded-l-none" : "scale-x-0 rounded-l-[100%]"
        }`}
      ></div>
      <nav
        className={`fixed top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-screen z-10 flex items-center justify-center  duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-10 items-center">
          {menuData?.map((item, i) => {
            return (
              <li key={`menu-item-${i}`} className="overflow-hidden">
                <div
                  className={`block transition duration-1000 ${delay[i]} ${
                    open ? "translate-y-0" : "translate-y-[110%]"
                  } `}
                >
                  <MenuItem title={item?.title} url={item?.url} />
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MenuList;
