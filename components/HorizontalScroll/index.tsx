import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, Children } from "react";
import LargeTitle from "../LargeTitle";
import Container from "../Container";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

  const makeSwiper = useWindowWidth() < 1025 && title;

  const titleKey = title ? title.split(" ").join("-").toLowerCase() : "";

  useLayoutEffect(() => {
    if (makeSwiper) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider?.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, [makeSwiper]);

  return (
    <div ref={component}>
      <div
        ref={slider}
        className={`horizontal-container relative ${title && "with-title"}`}
      >
        {title ? (
          <>
            <div className="lg:absolute lg:left-0 lg:right-0 lg:top-10 xl:top-20">
              <Container>
                <div className="mb-10">
                  <LargeTitle title={title} />
                </div>
              </Container>
            </div>
            {makeSwiper ? (
              <Swiper slidesPerView={"auto"} className="mobile-swiper ">
                {Children.map(children, (child, i) => (
                  <SwiperSlide key={`mobile-swiper-${titleKey}-${i}`}>
                    {child}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              Children.map(children, (child) => (
                <div
                  className={`panel ${
                    title &&
                    "h-screen flex items-center translate-y-[15%] xl:translate-y-[10%] lg:pl-52 xl:pl-64"
                  }`}
                >
                  {child}
                </div>
              ))
            )}
          </>
        ) : (
          Children.map(children, (child) => (
            <div className={"panel"}>{child}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;
