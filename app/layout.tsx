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
          <Header />
          <ThemeProvider>{children}</ThemeProvider>
          <div className="lg:w-14 fixed right-16 top-0 h-full flex flex-col">
            <Social />
          </div>
        </MouseFollowerComponent>
      </body>
    </html>
  );
}
