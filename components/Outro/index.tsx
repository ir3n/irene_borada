"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import SlideFromBelow from "../SlideFromBelow";
import Container from "../Container";
import { GradientSparklesIcon } from "../Icons/GradientSparklesIcon";
import GradientSparkles from "../Icons/GradientSparkles";

const Outro = () => {
  const [hover, setHover] = useState(false);
  const goBackToTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div className="full-h-section relative">
        <Container>
          <Link
            href="mailto:iren.borada@gmail.com"
            data-cursor-text="contact me"
            aria-label="Contact me"
            className="block pointer-events-none lg:pointer-events-auto"
          >
            <div className="intro-title md:mt-10">
              <SlideFromBelow>Let's build</SlideFromBelow>
              <SlideFromBelow order={1}>something</SlideFromBelow>
              <SlideFromBelow order={2}>
                together!
                <GradientSparkles className="inline max-w-10 sm:max-w-16 md:max-w-32 lg:max-w-44" />
              </SlideFromBelow>
            </div>
          </Link>
          <button
            type="button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={goBackToTop}
            className="mt-5 md:mt-10 text flex items-center leading-[1.1] gap-x-1.5 cursor-pointer w-fit"
            data-cursor="-hidden"
          >
            go back to the top
            <span
              className={`max-w-9 md:max-w-full mb-2 md:mb-3 ${
                hover ? "lg:translate-y-[-0.5rem]" : "lg:translate-y-1"
              } transition duration-500`}
            >
              <ArrowUpIcon color="var(--color-accent)" className="size-14" />
            </span>
          </button>
        </Container>
        <div className="note text-center md:text-right absolute left-0 md:left-auto right-0 md:right-4 lg:right-[50px] bottom-4 lg:bottom-[50px] z-10">
          designed & developed by Irene Borada
          <br /> ©{new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default Outro;
