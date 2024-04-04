"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { ScrollDirection } from "@/hooks/useScrollDirection";

export interface Props {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  top: boolean;
  setTop: Dispatch<SetStateAction<boolean>>;
  bottom: boolean;
  setBottom: Dispatch<SetStateAction<boolean>>;
  scrollDir: ScrollDirection;
}

export const CurrentSectionContext = createContext<Props>({
  currentSection: "intro",
  setCurrentSection: () => "intro",
  top: true,
  setTop: () => true,
  bottom: false,
  setBottom: () => false,
  scrollDir: ScrollDirection.down,
});

export default function CurrentSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState("intro");
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);

  const scrollDir = useScrollDirection();

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
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}
