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
  const storedItem =
    typeof window !== "undefined" ? localStorage.getItem("lightTheme") : null;
  const initialLocalStorage = storedItem ? JSON.parse(storedItem) : false;

  const [lightTheme, setLightTheme] = useState(initialLocalStorage);

  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("lightTheme", JSON.stringify(lightTheme));
  }, [lightTheme]);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
    typeof window !== "undefined" &&
      localStorage.setItem("lightTheme", JSON.stringify(lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      <div
        className={`${
          !lightTheme ? "bg-dark text-white" : "bg-light text-dark"
        } transition duration-500`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
