import { useState, useContext, useEffect } from "react";
import { MenuContext } from "@/providers/menu-provider";

import MenuItem from "./MenuItem";

import menuData from "@/data/menu.json";

const MenuList = () => {
  const { open } = useContext(MenuContext);

  return (
    <>
      <div
        className="fixed top-0 right-0 bg-accent w-full md:w-1/2 lg:w-1/3 max-w-[48rem] h-screen duration-500 origin-right"
        style={{ transform: `${open ? "none" : " scaleX(0)"}` }}
      ></div>
      <nav
        className={`fixed top-0 right-0 w-full md:w-1/2 lg:w-1/3 max-w-[48rem] h-screen z-10 flex items-center justify-center  duration-500`}
        style={{ transform: `${open ? "none" : "translateX(100%)"}` }}
      >
        <ul className="p-10 flex flex-col gap-10 items-center">
          {menuData?.map((item, i) => (
            <li key={`menu-item-${i}`}>
              <MenuItem title={item?.title} url={item?.url} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuList;
