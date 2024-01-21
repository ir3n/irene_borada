import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, Children } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      slider.current.width = `${panels.length * 100}vh`;
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      <div ref={slider} className="horizontal-container">
        {Children.map(children, (child) => (
          <div className="panel">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
