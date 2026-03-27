import type { Metadata } from "next";

import TopProgressBar from "@/components/TopProgressBar";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import SmoothScrolling from "@/components/SmoothScrolling";

import MenuProvider from "../providers/menu-provider";

import { sans } from "./fonts";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ireneborada.com"),
  title: "Irene Borada | Frontend Engineer",
  description:
    "Self-taught Frontend Engineer specializing in React, building high-quality user experiences with clean, maintainable code.",
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
