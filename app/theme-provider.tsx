"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value="dark">
      <div className="bg-dark">{children}</div>
    </ThemeContext.Provider>
  );
}
