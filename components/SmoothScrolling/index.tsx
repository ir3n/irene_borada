"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({
  direction,
  children,
}: {
  direction?: "horizontal";
  children: React.ReactNode;
}) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        smoothTouch: true,
        orientation: direction || "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
