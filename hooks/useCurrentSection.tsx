import { useState, useRef, useEffect } from "react";

export const useCurrentSection = () => {
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        //Update state with the visible section ID
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 1.0,
      }
    );

    //Get custom attribute data-section from all sections
    const sections = document.getElementsByTagName("section");

    Array.from(sections).forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      Array.from(sections).forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return activeSection;
};
