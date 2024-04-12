"use client";

import { useEffect, useRef, Children } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: component.current,
          scrub: 1,
          end: () => "+=" + slider?.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component}>
      <div ref={slider} className={`flex`}>
        {Children.map(children, (child) => (
          <div className={"panel flex-1"}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
