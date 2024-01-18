"use client";

import IntroOutro from "@/components/IntroOutro";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function Home() {
  return (
    <main>
      <Cursor isGelly={true} cursorBackgrounColor={"transparent"} />
      <section>
        <IntroOutro />
        <IntroOutro />
      </section>
      <section id="outro">
        <IntroOutro />
      </section>
    </main>
  );
}
