"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { accentColor } from "@/constants";

import SlideFromBelow from "../SlideFromBelow";
import RotatingFlower from "../RotatingFlower";
import Container from "../Container";

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
          >
            <div className="intro-title md:mt-10">
              <SlideFromBelow>Thanks for</SlideFromBelow>
              <SlideFromBelow order={1}>
                meeting
                <span className="ml-3 lg:ml-5 inline-block translate-y-1">
                  <RotatingFlower />
                </span>
              </SlideFromBelow>
              <SlideFromBelow order={2}>with me!</SlideFromBelow>
            </div>
          </Link>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={goBackToTop}
            className="lg:absolute lg:bottom-10 mt-5 md:mt-10 text flex items-center leading-[1.1] gap-x-1.5 cursor-pointer w-fit"
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
