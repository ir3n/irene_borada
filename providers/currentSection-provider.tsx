"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Dir = "up" | "down";

export interface Props {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  top: boolean;
  setTop: Dispatch<SetStateAction<boolean>>;
  bottom: boolean;
  setBottom: Dispatch<SetStateAction<boolean>>;
  scrollDir: Dir;
  setScrollDir: Dispatch<SetStateAction<Dir>>;
}

export const CurrentSectionContext = createContext<Props>({
  currentSection: "intro",
  setCurrentSection: () => "intro",
  top: true,
  setTop: () => true,
  bottom: false,
  setBottom: () => false,
  scrollDir: "down",
  setScrollDir: () => "down",
});

export default function CurrentSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState("intro");
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        top,
        setTop,
        bottom,
        setBottom,
        scrollDir,
        setScrollDir,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}
