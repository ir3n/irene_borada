import { useEffect, useState } from "react";

export enum ScrollDirection {
  up = "up",
  down = "down",
}

export const useScroll = () => {
  const threshold = 100;
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up);
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const [currentSection, setCurrentSection] = useState("intro");

  const throttle = (fun: (...args: any[]) => void, delay: number) => {
    let flag = true;
    return function () {
      if (flag) {
        fun();
        flag = false;
        setTimeout(() => (flag = true), delay);
      }
    };
  };

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirection.down
          : ScrollDirection.up;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
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

    const setVisibleSection = () => {
      if (typeof window !== "undefined") {
        const sections = document.getElementsByTagName("section");
        Array.from(sections).forEach((section) => {
          const top = section.getBoundingClientRect().top;
          const bottom = section?.getBoundingClientRect().bottom;
          if (typeof window !== "undefined") {
            top <= 300 &&
              bottom + 300 >= window.innerHeight &&
              setCurrentSection(section.id);
          }
        });
      }
    };

    setVisibleSection();

    const onScroll = throttle(() => {
      updateScrollDirection();
      detectTopAndBottom();
      setVisibleSection();
    }, 100);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollDir, top, bottom, currentSection };
};
