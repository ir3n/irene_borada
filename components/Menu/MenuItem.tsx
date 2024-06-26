"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { MenuContext } from "@/providers/menu-provider";
import { useTheme } from "next-themes";
import { useScroll } from "@/hooks/useScroll";

interface MenuItemData {
  title: string;
  url: string;
}

const MenuItem = ({ title, url }: MenuItemData) => {
  const { open, setOpen } = useContext(MenuContext);
  const { currentSection } = useScroll();
  const { theme } = useTheme();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(title.split(" ").join("-").toLowerCase() === currentSection);
  }, [title, currentSection]);

  const handleLinkClick = (): void => {
    setOpen(!open);
  };

  return (
    <Link
      href={url}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={handleLinkClick}
      onFocus={() => setOpen(true)}
      className={`${active ? "pointer-events-none" : "block"}`}
      aria-disabled={active}
      tabIndex={active ? -1 : undefined}
    >
      <div
        className={`text-[3rem] lg:text-[3rem] xl:text-[5rem] leading-none transition duration-500 relative lg:pl-10 xl:pl-12 lg:pr-16 xl:pr-20 overflow-hidden ${
          theme === "light" ? "text-white" : "text-dark"
        }`}
      >
        <span
          className={`hidden lg:inline-block absolute left-0 text-[90%] top-2 ${
            hover && !active ? "opacity-100" : "opacity-0"
          } transition duration-500`}
          aria-hidden="true"
        >
          {"<"}
        </span>
        <span className="block">{active ? `#${title}` : title}</span>
        <span
          className={`hidden lg:inline-block absolute right-0 text-[90%] top-2  ${
            hover && !active ? "opacity-100" : "opacity-0"
          } transition duration-500`}
          aria-hidden="true"
        >
          {"/>"}
        </span>
      </div>
    </Link>
  );
};

export default MenuItem;
