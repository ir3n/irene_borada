import { useContext } from "react";
import { MenuContext } from "@/providers/menu-provider";

import MenuItem from "./MenuItem";
import SlideFromBelow from "../SlideFromBelow";

import menuData from "@/data/menu.json";

const MenuList = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <>
      <div
        className={`fixed top-0 right-0 bg-accent w-full md:w-1/2 lg:w-2/5 h-screen duration-500 origin-right ${
          open ? "scale-x-100 rounded-l-none" : "scale-x-0 rounded-l-[100%]"
        }`}
      ></div>
      <nav
        onBlur={() => setOpen(false)}
        className={`fixed top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-screen z-20 flex items-center justify-center duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 md:gap-9 xl:gap-11 items-center">
          {menuData?.map((item, i) => {
            return (
              <li key={`menu-item-${i}`}>
                <SlideFromBelow order={i}>
                  <MenuItem title={item?.title} url={item?.url} />
                </SlideFromBelow>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MenuList;
