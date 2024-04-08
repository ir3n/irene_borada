"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

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
