import Intro from "@/components/Intro";
import TitleWithText from "@/components/TitleWithText";
import Stack from "@/components/Stack";
import Studies from "@/components/Studies";
import Work from "@/components/Work";
import FreeTime from "@/components/FreeTime";
import Outro from "@/components/Outro";

import aboutData from "@/data/my-story.json";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="hidden">Irene Borada - Front-end Developer</h1>
        <section id="intro">
          <Intro />
        </section>
        <section id="my-story">
          <TitleWithText title={aboutData?.title} text={aboutData?.text} />
        </section>
        <section id="studies">
          <Studies />
        </section>
        <section>
          <Stack />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="free-time">
          <FreeTime />
        </section>
        <section>
          <Outro />
        </section>
      </main>
    </>
  );
}
