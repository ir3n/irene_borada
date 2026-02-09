"use client";

import { ReactLenis } from "lenis/react";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
