"use client";

import { useRef, useContext, useEffect } from "react";
import { CurrentSectionContext } from "@/providers/currentSection-provider";

interface Props {
  id: string;
  children: React.ReactNode;
}

const CustomSection = ({ id, children }: Props) => {
  const { setCurrentSection } = useContext(CurrentSectionContext);

  const sectionRef = useRef(null);

  const checkInView = () => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }
    const top = section.getBoundingClientRect().top;
    const bottom = section.getBoundingClientRect().bottom;
    if (typeof window !== "undefined") {
      top <= 300 && bottom + 300 >= window.innerHeight && setCurrentSection(id);
    }
  };

  useEffect(() => {
    checkInView();
  }, []);

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", checkInView);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <section id={id} ref={sectionRef}>
      {children}
    </section>
  );
};

export default CustomSection;
