"use client";

import { useLayoutEffect, useRef, Children } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + slider?.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component}>
      <div ref={slider} className={`flex h-screen`}>
        {Children.map(children, (child) => (
          <div className={"panel w-screen h-screen"}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
