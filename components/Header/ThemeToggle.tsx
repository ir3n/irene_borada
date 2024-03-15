"use client";

import React from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/app/theme-provider";
import { Sun, Moon } from "lucide-react";
import { accentColor } from "@/constants";

const ThemeToggle = () => {
  const { lightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme}>
      {!lightTheme ? <Sun color={accentColor} /> : <Moon color={accentColor} />}
    </div>
  );
};

export default ThemeToggle;
