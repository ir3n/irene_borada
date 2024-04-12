"use client";

import { useLayoutEffect, useRef, Children, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      if (slider.current) {
        slider.current.style.width = `${panels.length * 100}vw`;
      }

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider?.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component}>
      {/* add width as children width wh */}
      <div ref={slider} className={`flex`}>
        {Children.map(children, (child) => (
          <div className={"panel w-screen h-screen"}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
