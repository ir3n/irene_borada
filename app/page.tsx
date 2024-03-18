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

import aboutData from "@/data/about.json";
import studiesData from "@/data/studies.json";
import workData from "@/data/work.json";
import freeTimeData from "@/data/free-time.json";

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
            <TitleWithText data={aboutData} />
          </section>

          <section id="studies">
            <Studies data={studiesData} />
          </section>

          <section id="work">
            <Work data={workData} />
          </section>

          <section id="free-time">
            <FreeTime data={freeTimeData} />
          </section>

          <section id="outro">
            <Outro />
          </section>
        </SmoothScrolling>
      </main>
    </>
  );
}
