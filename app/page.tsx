"use client";

import { useEffect, useState } from "react";
import Intro from "@/components/Intro";
import ProgressBar from "react-scroll-progress-bar";

import { Cursor } from "react-creative-cursor";
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
      <main className="px-4 lg:px-52">
        <ProgressBar bgcolor="#4A5CFF" />
        {isDesktop ? <Cursor isGelly={true} /> : null}

        <section>
          <Intro />
          {/* <IntroOutro /> */}
        </section>
        {/* <section id="outro">
          <IntroOutro />
        </section> */}
      </main>
    </>
  );
}
