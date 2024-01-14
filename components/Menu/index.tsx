import { useState } from "react";
import Burger from "./Burger";
import MenuList from "./MenuList";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <Burger open={openMenu} />
      <MenuList />
    </>
  );
};

export default Menu;
