"use client";

import { useRef, useContext, useEffect } from "react";
import { CurrentSectionContext } from "@/providers/currentSection-provider";

interface Props {
  id: string;
  children: React.ReactNode;
}

const CustomSection = ({ id, children }: Props) => {
  const { setCurrentSection, setTop, setBottom } = useContext(
    CurrentSectionContext
  );

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

  const detectTopAndBottom = () => {
    if (typeof window !== "undefined") {
      setTop(window.scrollY === 0);
      setBottom(
        window.scrollY >=
          window.document.body.offsetHeight - window.innerHeight - 50
      );
    }
  };

  useEffect(() => {
    checkInView();
    detectTopAndBottom();
  }, []);

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", () => {
        detectTopAndBottom();
        checkInView();
      });

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", () => {
          detectTopAndBottom();
          checkInView();
        });
    };
  }, []);

  return (
    <section id={id} ref={sectionRef}>
      {children}
    </section>
  );
};

export default CustomSection;
