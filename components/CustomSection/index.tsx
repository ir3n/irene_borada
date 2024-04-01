"use client";

import { useRef, useContext, useEffect, useState } from "react";
import { CurrentSectionContext } from "@/providers/currentSection-provider";

interface Props {
  id: string;
  children: React.ReactNode;
}

const CustomSection = ({ id, children }: Props) => {
  const { setCurrentSection, setTop, setBottom, scrollDir, setScrollDir } =
    useContext(CurrentSectionContext);

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
    if (typeof window !== "undefined") {
      const threshold = 0;
      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.scrollY;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          detectTopAndBottom();
          checkInView();
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [scrollDir]);

  return (
    <section id={id} ref={sectionRef}>
      {children}
    </section>
  );
};

export default CustomSection;
