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
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
        orientation: direction || "vertical",
        gestureOrientataion: "both",
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
