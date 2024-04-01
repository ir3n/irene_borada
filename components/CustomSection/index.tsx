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

  const onScroll = () => {
    detectTopAndBottom();
    checkInView();
  };

  useEffect(() => {
    onScroll();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <section id={id} ref={sectionRef}>
      {children}
    </section>
  );
};

export default CustomSection;
