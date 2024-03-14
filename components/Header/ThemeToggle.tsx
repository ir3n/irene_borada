"use client";

import React from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/app/theme-provider";
import { Sun, Moon } from "lucide-react";
import { accentColor } from "@/constants";

const ThemeToggle = () => {
  const { lightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="cursor-pointer absolute right-[200px] top-[50px] z-20">
      <div onClick={toggleTheme}>
        {!lightTheme ? (
          <Sun color={accentColor} />
        ) : (
          <Moon color={accentColor} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
