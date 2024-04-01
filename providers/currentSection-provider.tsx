"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface Props {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  top: boolean;
  setTop: Dispatch<SetStateAction<boolean>>;
  bottom: boolean;
  setBottom: Dispatch<SetStateAction<boolean>>;
}

export const CurrentSectionContext = createContext<Props>({
  currentSection: "intro",
  setCurrentSection: () => "intro",
  top: true,
  setTop: () => true,
  bottom: false,
  setBottom: () => false,
});

export default function CurrentSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState("intro");
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        top,
        setTop,
        bottom,
        setBottom,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}
