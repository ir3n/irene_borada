"use client";

import Burger from "./Burger";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div data-cursor="-hidden">
      <Burger />
      <MenuList />
    </div>
  );
};

export default Menu;
