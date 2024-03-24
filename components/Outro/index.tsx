"use client";

import { useState } from "react";
import Container from "../Container";
import RotatingFlower from "../RotatingFlower";
import { ArrowUp } from "lucide-react";
import { accentColor } from "@/constants";

const Outro = () => {
  const [hover, setHover] = useState(false);
  const goBackToTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div className="section relative">
        <Container>
          <div className="intro-title block">
            Thanks for meeting
            <span className="ml-3 lg:ml-5 inline-block translate-y-1">
              <RotatingFlower />
            </span>
            <br />
            with me!
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={goBackToTop}
            className="md:mt-16 text flex items-center leading-[1.1] gap-x-1.5 cursor-pointer w-fit"
            data-cursor="-hidden"
          >
            go back to the <em>start</em>
            <span
              className={`max-w-[40px] md:max-w-full mb-2  ${
                hover ? "lg:translate-y-[-0.5rem]" : "lg:translate-y-1"
              } transition duration-500`}
            >
              <ArrowUp color={accentColor} size={60} />
            </span>
          </div>
        </Container>
        <div className="note text-center md:text-right absolute left-0 md:left-auto right-0 md:right-4 lg:right-[50px] bottom-4 lg:bottom-[50px]">
          designed & developed by Irene Borada
          <br /> ©{new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default Outro;
