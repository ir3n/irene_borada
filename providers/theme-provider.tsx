"use client";

import { createContext, useState, useEffect } from "react";
import Image from "next/image";

type Theme = "dark" | "light";

export interface ThemeProps {
  theme: Theme | null;
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
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
    typeof window !== "undefined" &&
      setTheme((localStorage.getItem("theme") ?? "dark") as Theme);
  }, []);

  useEffect(() => {
    typeof window !== "undefined" &&
      theme &&
      localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`${
          theme && theme === "light"
            ? "bg-light text-dark"
            : "bg-dark text-white"
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
