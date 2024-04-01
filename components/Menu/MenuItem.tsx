import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { MenuContext } from "@/providers/menu-provider";
import { CurrentSectionContext } from "@/providers/currentSection-provider";

interface MenuItemData {
  title: string;
  url: string;
}

const MenuItem = ({ title, url }: MenuItemData) => {
  const { open, setOpen } = useContext(MenuContext);
  const { currentSection } = useContext(CurrentSectionContext);

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(title.split(" ").join("-").toLowerCase() === currentSection);
  }, [title, currentSection]);

  const handleLinkClick = (): void => {
    setOpen(!open);
  };

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="text-[3rem] lg:text-[3rem] xl:text-[5rem] leading-none"
    >
      <Link
        href={url}
        onClick={handleLinkClick}
        className={active ? "pointer-events-none" : ""}
        aria-disabled={active}
        tabIndex={active ? -1 : undefined}
      >
        <div
          className={`transition duration-500 text-dark relative lg:pl-10 xl:pl-12 lg:pr-16 xl:pr-20`}
        >
          <span
            className={`hidden lg:inline-block absolute left-0 text-[90%] ${
              hover && !active ? "opacity-100" : "opacity-0"
            } transition duration-500`}
          >
            {"<"}
          </span>
          {active ? `#${title}` : title}
          <span
            className={`hidden lg:inline-block absolute right-0 text-[90%] ${
              hover && !active ? "opacity-100" : "opacity-0"
            } transition duration-500`}
          >
            {"/>"}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
