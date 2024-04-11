import Intro from "@/components/Intro";
import TitleWithText from "@/components/TitleWithText";
import Stack from "@/components/Stack";
import Studies from "@/components/Studies";
import Work from "@/components/Work";
import FreeTime from "@/components/FreeTime";
import Outro from "@/components/Outro";

import aboutData from "@/data/about.json";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="hidden">Irene Borada - Front-end Developer</h1>
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <TitleWithText title={aboutData?.title} text={aboutData?.text} />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="studies">
          <Studies />
        </section>

        <section id="free-time">
          <FreeTime />
        </section>
        <section id="outro">
          <Outro />
        </section>
      </main>
    </>
  );
}
