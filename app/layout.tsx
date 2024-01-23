import type { Metadata } from "next";
import Header from "@/components/Header";
import Social from "@/components/Social";
import MouseFollowerComponent from "@/components/MouseFollower";

import "../styles/globals.css";

import { Poppins, Suranna } from "next/font/google";

export const sans = Poppins({
  // TODO: delete anything I don't finally use
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--sans",
});

export const serif = Suranna({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--serif",
});

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
    <html lang="en">
      <body className={`${sans.className} bg-dark`}>
        <MouseFollowerComponent>
          <Header />
          {children}
          <div className="lg:w-14 fixed right-16 top-0 h-full flex flex-col">
            <Social />
          </div>
        </MouseFollowerComponent>
      </body>
    </html>
  );
}
