"use client";

import { useEffect } from "react";
import ProgressBar from "react-scroll-progress-bar";

import CustomSection from "@/components/CustomSection";
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
        <CustomSection id="intro">
          <Intro />
        </CustomSection>
        <CustomSection id="about">
          <TitleWithText data={aboutData} />
        </CustomSection>
        <CustomSection id="studies">
          <Studies data={studiesData} />
        </CustomSection>
        <CustomSection id="work">
          <Work data={workData} />
        </CustomSection>
        <CustomSection id="free-time">
          <FreeTime data={freeTimeData} />
        </CustomSection>
        <CustomSection id="outro">
          <Outro />
        </CustomSection>
      </main>
    </>
  );
}
