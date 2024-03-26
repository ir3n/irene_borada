import { useEffect } from "react";
import gsap from "gsap";

export const useAnimatedTitle = (
  elementRef: RefObject<HTMLSpanElement> | RefObject<HTMLHeadingElement>
) => {
  useEffect(() => {
    const elementToAnimate = elementRef?.current;

    const tl = gsap.timeline({ paused: true });

    // Animation to hide the title initially
    tl.fromTo(
      elementToAnimate,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.5 }
    );

    // Intersection Observer to trigger animation when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play the animation when the title is in view
          tl.play();
        } else {
          // Reverse the animation when the title is out of view
          tl.reverse();
        }
      });
    });

    observer.observe(elementToAnimate);

    // Clean up the observer when component unmounts
    return () => {
      observer.unobserve(elementToAnimate);
    };
  }, []);
};
