"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface Props {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

export const CurrentSectionContext = createContext<Props>({
  currentSection: "intro",
  setCurrentSection: () => "intro",
});

export default function CurrentSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState("intro");

  return (
    <CurrentSectionContext.Provider
      value={{ currentSection, setCurrentSection }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}
