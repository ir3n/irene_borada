import { useEffect, RefObject } from "react";
import gsap from "gsap";

export const useAnimatedTitle = (
  elementRef: RefObject<HTMLSpanElement> | RefObject<HTMLHeadingElement>
) => {
  useEffect(() => {
    const elementToAnimate = elementRef?.current;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      elementToAnimate,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.5 }
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.reverse();
        }
      });
    });

    observer.observe(elementToAnimate);

    return () => {
      observer.unobserve(elementToAnimate);
    };
  }, []);
};
