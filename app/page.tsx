"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import IntroOutro from "@/components/IntroOutro";

export default function Home() {
  return (
    <main>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <section>
          <IntroOutro />
          <IntroOutro />
        </section>
        <section id="outro">
          <IntroOutro />
        </section>
      </ReactLenis>
    </main>
  );
}
