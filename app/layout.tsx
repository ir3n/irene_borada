import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import { ThemeProvider } from "next-themes";
import MenuProvider from "../providers/menu-provider";
import CurrentSectionProvider from "@/providers/currentSection-provider";

import { sans, serif } from "./fonts";

import "../styles/globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ireneborada.com"),
  title: "Irene Borada | Front-end Developer",
  description: "Trying to conquer the JavaScript world.",
  openGraph: {
    images: "/opengraph-image.jpg",
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
                  <Social />
                </CurrentSectionProvider>
              </MenuProvider>
            </ThemeProvider>
          </MouseFollowerComponent>
        </SmoothScrolling>
        <SpeedInsights />
      </body>
    </html>
  );
}
