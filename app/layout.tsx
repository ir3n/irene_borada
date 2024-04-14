import type { Metadata } from "next";
import Image from "next/image";

import TopProgressBar from "@/components/TopProgressBar";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import SmoothScrolling from "@/components/SmoothScrolling";

import { ThemeProvider } from "next-themes";
import MenuProvider from "../providers/menu-provider";

import { sans, serif } from "./fonts";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ireneborada.com"),
  title: "Irene Borada | Front-end Developer",
  description:
    "Self-taught Front-end Developer driven by a strong passion for JavaScript and committed to writing clear, reusable code for elegant, responsive interfaces prioritizing the user's experience.",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <TopProgressBar />
        <SmoothScrolling>
          <MouseFollowerComponent>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              <MenuProvider>
                <Header />
                <div className="max-w-[160rem] mx-auto">{children}</div>
                <div className="fixed bottom-0 right-0 z-[-1]">
                  <Image
                    src="/images/glare.png"
                    alt="Glare"
                    width={1320}
                    height={865}
                    sizes="(max-width: 768px) 375px, 1320px"
                    loading="eager"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <Social />
              </MenuProvider>
            </ThemeProvider>
          </MouseFollowerComponent>
        </SmoothScrolling>
      </body>
    </html>
  );
}
