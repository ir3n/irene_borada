"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { accentColor } from "@/constants";

const RotatingFlower = () => {
  const rotatingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const elementToAnimate = rotatingRef?.current;

    tl.fromTo(
      elementToAnimate,
      { rotation: "0", ease: "none", repeat: -1 },
      { rotation: "360", ease: "none", duration: 15, repeat: -1 }
    );
  }, []);

  return (
    <div
      ref={rotatingRef}
      className="max-w-11 lg:max-w-24 xl:max-w-max inline-block"
      aria-label="A rotating flower"
    >
      <div id="rotating-flower">
        <svg
          width="119"
          height="119"
          viewBox="0 0 119 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.3997 54.9669C136.354 33.5349 95.5512 -13.3666 65.4837 47.0154C95.5512 -13.3571 33.5352 -17.6701 54.9672 46.2839C33.5352 -17.6701 -13.3663 23.1324 47.0157 53.1999C-13.3568 23.1324 -17.6698 85.1484 46.2842 63.7164C-17.6698 85.1484 23.1327 132.05 53.2002 71.6679C23.1327 132.04 85.1487 136.353 63.7167 72.3994C85.1487 136.353 132.05 95.5509 71.6682 65.4834C132.041 95.5509 136.354 33.5349 72.3997 54.9669Z"
            fill={accentColor}
          />
          <path
            d="M59.3369 70.2619C65.3706 70.2619 70.2619 65.3706 70.2619 59.3369C70.2619 53.3032 65.3706 48.4119 59.3369 48.4119C53.3032 48.4119 48.4119 53.3032 48.4119 59.3369C48.4119 65.3706 53.3032 70.2619 59.3369 70.2619Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default RotatingFlower;
