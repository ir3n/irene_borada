"use client";

import { useEffect, useState } from "react";
import ProgressBar from "react-scroll-progress-bar";
import { Cursor } from "react-creative-cursor";
import { Expo } from "gsap";

import SmoothScrolling from "@/components/SmoothScrolling";
import Intro from "@/components/Intro";
import TitleWithText from "@/components/TitleWithText";

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
          <section>
            <Intro />
          </section>
          <section>
            <TitleWithText
              title={"About"}
              text={
                '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <em>Richard McClintock</em>, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  Lorem Ipsum, consectetur, from a </p><p>The Extremes  Lorem Ipsum of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the <em>Renaissance</em>. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>'
              }
            />
          </section>

          {/* <section id="outro">
          <IntroOutro />
        </section> */}
        </SmoothScrolling>
      </main>
    </>
  );
}
