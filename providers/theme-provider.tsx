"use client";

import { createContext, useState, useEffect } from "react";
import Image from "next/image";

type Theme = "dark" | "light";

export interface ThemeProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps>({
  theme: "dark" as Theme,
  toggleTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storedItem =
  //   typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  // const initialLocalStorage = storedItem ? storedItem : "dark";

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") ?? "dark") as Theme
  );

  useEffect(() => {
    typeof window !== "undefined" && localStorage.setItem("theme", theme);

    return () => localStorage.setItem("theme", "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    // typeof window !== "undefined" && localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`${
          theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
        } relative transition duration-500`}
      >
        <div className="fixed right-0 bottom-0 w-screen h-screen z-[-1]">
          <Image src="/images/blur.png" fill alt="Color shine" />
        </div>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
