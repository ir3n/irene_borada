import type { Metadata } from "next";

import TopProgressBar from "@/components/TopProgressBar";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import SmoothScrolling from "@/components/SmoothScrolling";

import MenuProvider from "../providers/menu-provider";

import { sans } from "./fonts";

import "../styles/globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

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
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body className="font-sans bg-light dark:bg-dark text-dark dark:text-white transition-colors duration-500">
        <TopProgressBar />
        <SmoothScrolling>
          <MouseFollowerComponent>
            <ThemeProviderWrapper>
              <MenuProvider>
                <Header />
                <div className="max-w-[160rem] mx-auto">{children}</div>
                <Social />
              </MenuProvider>
            </ThemeProviderWrapper>
          </MouseFollowerComponent>
        </SmoothScrolling>
      </body>
    </html>
  );
}
