"use client";

import { useEffect } from "react";
import ProgressBar from "react-scroll-progress-bar";

import Intro from "@/components/Intro";
import TitleWithText from "@/components/TitleWithText";
import Studies from "@/components/Studies";
import { Work } from "@/components/Work";
import FreeTime from "@/components/FreeTime";
import Outro from "@/components/Outro";

import { accentColor } from "@/constants";

import aboutData from "@/data/about.json";
import studiesData from "@/data/studies.json";
import workData from "@/data/work.json";
import freeTimeData from "@/data/free-time.json";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView();
        }
      }
    };

    handleHashChange(); // Scroll to section on initial load

    // Listen for hash changes and scroll to the section
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <ProgressBar bgcolor={accentColor} />
      <main>
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
      </main>
    </>
  );
}
