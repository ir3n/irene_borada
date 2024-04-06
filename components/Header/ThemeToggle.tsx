"use client";

import { useContext, useState, useEffect } from "react";
import { MenuContext } from "@/providers/menu-provider";
import { Sun, Moon } from "lucide-react";
import { accentColor, darkColor } from "@/constants";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const { open } = useContext(MenuContext);

  let color = open ? darkColor : accentColor;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:lg:scale-125 transition duration-500"
    >
      {theme === "light" ? <Moon color={color} /> : <Sun color={color} />}
    </div>
  );
};

export default ThemeToggle;
