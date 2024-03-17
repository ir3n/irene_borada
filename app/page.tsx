"use client";

import ProgressBar from "react-scroll-progress-bar";

import SmoothScrolling from "@/components/SmoothScrolling";
import Intro from "@/components/Intro";
import TitleWithText from "@/components/TitleWithText";
import HorizontalScroll from "@/components/HorizontalScroll";
import Studies from "@/components/Studies";
import Outro from "@/components/Outro";
import { accentColor } from "@/constants";
import LargeTitle from "@/components/LargeTitle";
import { Work } from "@/components/Work";
import FreeTime from "@/components/FreeTime";

export default function Home() {
  return (
    <>
      <ProgressBar bgcolor={accentColor} />
      <main>
        <SmoothScrolling>
          <section id="intro">
            <Intro />
          </section>
          <section id="about">
            <TitleWithText
              title={"About"}
              text={
                '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <em>Richard McClintock</em>, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure  Lorem Ipsum, consectetur, from a </p><p>The Extremes  Lorem Ipsum of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the <em>Renaissance</em>. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>'
              }
            />
          </section>

          <section id="studies">
            <Studies />
          </section>

          <section id="work">
            <Work />
          </section>

          <section id="free-time">
            <FreeTime />
          </section>

          <section id="outro">
            <Outro />
          </section>
        </SmoothScrolling>
      </main>
    </>
  );
}
