// this should not be needed anymore

import { useEffect, useState } from "react";

export const useCurrentSection = (elementRef) => {
  const [currentSection, setCurrentSection] = useState("intro");

  useEffect(() => {
    const section = elementRef.current;

    // Intersection Observer to trigger animation when element comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.75 }
    );

    observer.observe(section);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(section);
    };
  }, []);

  return currentSection;
};
