"use client";

import { useContext, useState, useEffect } from "react";

import Logo from "./Logo";
import Menu from "../Menu";
import ThemeToggle from "./ThemeToggle";

import { CurrentSectionContext } from "@/providers/currentSection-provider";

import { windowWidth } from "@/hooks/helpers";
import { MenuContext } from "@/providers/menu-provider";

const Header = () => {
  const [hide, setHide] = useState(false);

  const { top, bottom } = useContext(CurrentSectionContext);

  const isMobile = windowWidth() < 768;

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
        className={`cursor-pointer fixed left-2.5 lg:left-12 top-[15px] lg:top-[50px] z-20 max-w-20 lg:max-w-max transition duration-500 ${
          hide && !open && "translate-y-[-155%]"
        }`}
        data-cursor="-hidden"
      >
        <Logo />
      </div>
      <div
        className={`cursor-pointer fixed right-[80px] lg:right-48 xl:right-52 top-[20px] lg:top-[50px] z-20 transition duration-500 ${
          hide && !open && "translate-y-[-195%]"
        }`}
      >
        <ThemeToggle />
      </div>
      <div
        className="fixed right-4 lg:right-10 xl:right-12 top-[10px] lg:top-[16px] w-8 lg:w-24 z-10"
        data-cursor="-hidden"
      >
        <Menu />
      </div>
    </header>
  );
};

export default Header;
