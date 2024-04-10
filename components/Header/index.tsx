"use client";

import { useContext, useState, useEffect } from "react";

import Logo from "./Logo";
import Menu from "../Menu";
import ThemeToggle from "./ThemeToggle";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { MenuContext } from "@/providers/menu-provider";
import { useScroll } from "@/hooks/useScroll";

const Header = () => {
  const [hide, setHide] = useState(false);

  const { top, bottom } = useScroll();

  const isMobile = useWindowWidth() < 768;

  const { open } = useContext(MenuContext);

  useEffect(() => {
    if (!isMobile) {
      return;
    }
    if (!top && !bottom) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [top, bottom, isMobile]);

  return (
    <header>
      <div
        className={`cursor-pointer fixed left-2.5 lg:left-12 top-[15px] lg:top-[50px] z-30 max-w-20 lg:max-w-max transition-[transform] duration-500 ${
          hide && !open && "translate-y-[-155%]"
        }`}
        data-cursor="-hidden"
      >
        <Logo />
      </div>
      <div
        className={`cursor-pointer fixed right-24 lg:right-44 xl:right-52 top-[25px] lg:top-[50px] z-30 transition duration-500 ${
          hide && !open && "translate-y-[-200%]"
        }`}
      >
        <ThemeToggle />
      </div>
      <div
        className="fixed right-4 lg:right-10 xl:right-12 top-[14px] lg:top-[16px] w-9 lg:w-24 z-20"
        data-cursor="-hidden"
      >
        <Menu />
      </div>
    </header>
  );
};

export default Header;
