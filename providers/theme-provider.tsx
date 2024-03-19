"use client";

import { createContext, useState, useEffect } from "react";

export interface ThemeProps {
  lightTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps>({
  lightTheme: false,
  toggleTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    localStorage.setItem("lightTheme", JSON.stringify(lightTheme));
  }, [lightTheme]);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      <div
        className={`${
          !lightTheme ? "bg-dark text-white" : "bg-light text-dark"
        } transition duration-300`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
