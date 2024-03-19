import { useState, useContext } from "react";
import Link from "next/link";
import { MenuContext } from "@/providers/menu-provider";

interface MenuItemData {
  title: string;
  url: string;
}

const MenuItem = ({ title, url }: MenuItemData) => {
  const { open, setOpen } = useContext(MenuContext);

  const [hover, setHover] = useState(false);

  const handleLinkClick = (): void => {
    // setOpen(false);
    setOpen(!open);
  };

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="relative sub"
    >
      <Link href={url} onClick={handleLinkClick}>
        <span
          className={`${
            hover ? "opacity-0" : "opacity-100"
          } transition duration-500 text-dark`}
        >
          {title}
        </span>
        <span
          className={`${
            hover ? "opacity-100" : "opacity-0"
          } absolute font-serif text-dark left-0 right-0 mx-auto text-center text-[160%] transition duration-500`}
        >
          {title}
        </span>
      </Link>
    </div>
  );
};

export default MenuItem;
