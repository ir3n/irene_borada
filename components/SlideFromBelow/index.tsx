import { useRef, useEffect, useState } from "react";

const SlideFromBelow = ({
  order = 0,
  children,
}: {
  order?: number;
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const animateRef = useRef(null);

  const delayClasses = [
    "delay-0",
    "delay-[100ms]",
    "delay-[200ms]",
    "delay-[300ms]",
    "delay-[400ms]",
    "delay-[500ms]",
  ];

  useEffect(() => {
    const elementToAnimate = animateRef?.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    });

    elementToAnimate && observer.observe(elementToAnimate);

    return () => {
      elementToAnimate && observer.unobserve(elementToAnimate);
    };
  }, [order]);

  return (
    <span ref={animateRef} className="block relative overflow-hidden">
      <span
        className={`block transition duration-1000 ${delayClasses[order]} ${
          show ? "translate-y-0" : "translate-y-[100%]"
        } `}
      >
        {children}
      </span>
    </span>
  );
};

export default SlideFromBelow;
