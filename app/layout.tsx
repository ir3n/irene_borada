import type { Metadata } from "next";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";
import ThemeProvider from "../providers/theme-provider";
import MenuProvider from "../providers/menu-provider";
import { sans, serif } from "./fonts";

import "../styles/globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

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
        <SmoothScrolling>
          <MouseFollowerComponent>
            <ThemeProvider>
              <MenuProvider>
                <Header />
                {children}
                <Social />
              </MenuProvider>
            </ThemeProvider>
          </MouseFollowerComponent>
        </SmoothScrolling>
      </body>
    </html>
  );
}
