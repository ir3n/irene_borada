"use client";

import { useContext } from "react";
import { ThemeContext } from "@/providers/theme-provider";
import { MenuContext } from "@/providers/menu-provider";
import { Sun, Moon } from "lucide-react";
import { accentColor, darkColor } from "@/constants";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { open } = useContext(MenuContext);

  let color = open ? darkColor : accentColor;

  return (
    <div
      onClick={toggleTheme}
      className="hover:lg:scale-125 transition duration-500"
    >
      {theme === "light" ? <Moon color={color} /> : <Sun color={color} />}
    </div>
  );
};

export default ThemeToggle;
