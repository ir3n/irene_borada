import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, Children } from "react";
import LargeTitle from "../LargeTitle";
import Container from "../Container";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      // slider.current.width = `${panels.length * 100}vw`;
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        scrollTrigger: {
          trigger: slider.current,
          pin: component.current,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: `${title ? "center 60%" : "top top"}`,
          end: () => "+=" + slider?.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      {title && (
        <Container>
          <div className="lg:pt-8">
            <LargeTitle title={title} />
          </div>
        </Container>
      )}
      <div ref={slider} className="horizontal-container">
        {Children.map(children, (child) => (
          <div className="panel">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
