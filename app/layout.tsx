import type { Metadata } from "next";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import { ThemeProvider } from "next-themes";
import MenuProvider from "../providers/menu-provider";
import CurrentSectionProvider from "@/providers/currentSection-provider";

import Image from "next/image";

import { sans, serif } from "./fonts";

import "../styles/globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ireneborada.com"),
  title: "Irene Borada | Front-end Developer",
  description: "Trying to conquer the JavaScript world.",
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
      <body className="font-sans">
        <SmoothScrolling>
          <MouseFollowerComponent>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              <MenuProvider>
                <CurrentSectionProvider>
                  <Header />
                  {children}
                  <div className="fixed bottom-0 right-0 z-[-1]">
                    <Image
                      src="/images/glare.png"
                      alt="Glare"
                      width={1320}
                      height={865}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      loading="eager"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <Social />
                </CurrentSectionProvider>
              </MenuProvider>
            </ThemeProvider>
          </MouseFollowerComponent>
        </SmoothScrolling>
      </body>
    </html>
  );
}
