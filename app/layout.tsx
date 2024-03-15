import type { Metadata } from "next";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import ThemeProvider from "./theme-provider";
import { sans, serif } from "./fonts";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Irene Borada | Front-end Developer",
  description: "Trying to conquer the JavaScript world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">
        <MouseFollowerComponent>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
          <div className="fixed left-0 md:left-auto bottom-8 md:bottom-auto right-0 md:right-3 lg:right-16 md:top-0 md:h-full lg:w-14 flex flex-col">
            <Social />
          </div>
        </MouseFollowerComponent>
      </body>
    </html>
  );
}
