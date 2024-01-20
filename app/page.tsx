"use client";

import { useEffect, useState } from "react";
import ProgressBar from "react-scroll-progress-bar";
import { Cursor } from "react-creative-cursor";
import { Expo } from "gsap";

import Intro from "@/components/Intro";
import SmoothScrolling from "@/components/SmoothScrolling";

import "react-creative-cursor/dist/styles.css";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (window !== undefined) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  return (
    <>
      <ProgressBar bgcolor="#4A5CFF" />
      {isDesktop ? (
        <Cursor
          isGelly={true}
          cursorBackgrounColor={"none"}
          backgroundImageAnimationEase={Expo.easeOut}
          backgroundImageAnimationDuration={0.8}
          sizeAnimationDuration={0.8}
        />
      ) : null}
      <main className="px-4 lg:px-52">
        <SmoothScrolling>
          <Intro />

          {/* <section id="outro">
          <IntroOutro />
        </section> */}
        </SmoothScrolling>
      </main>
    </>
  );
}
