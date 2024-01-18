"use client";

import IntroOutro from "@/components/IntroOutro";
import ProgressBar from "react-scroll-progress-bar";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function Home() {
  return (
    <>
      <main className="px-4 lg:px-52">
        {/* todo: do not render cursor on mobile */}
        <Cursor isGelly={true} cursorBackgrounColor={"transparent"} />
        <section>
          <IntroOutro />
          <IntroOutro />
        </section>
        <section id="outro">
          <IntroOutro />
        </section>
      </main>
      <ProgressBar bgcolor="#4A5CFF" />
    </>
  );
}
