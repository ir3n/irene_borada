"use client";

import { useContext } from "react";
import { ThemeContext } from "@/providers/theme-provider";
import { MenuContext } from "@/providers/menu-provider";
import { Sun, Moon } from "lucide-react";
import { accentColor, darkColor } from "@/constants";

const ThemeToggle = () => {
  const { lightTheme, toggleTheme } = useContext(ThemeContext);
  const { open } = useContext(MenuContext);

  let color = open ? darkColor : accentColor;

  return (
    <div onClick={toggleTheme}>
      {!lightTheme ? <Sun color={color} /> : <Moon color={color} />}
    </div>
  );
};

export default ThemeToggle;
