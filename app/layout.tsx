import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Social from "@/components/Social";
import SmoothScrolling from "@/components/SmoothScrolling";

import "../styles/globals.css";

// import { Suranna } from "next/font/google";
// const serif = Suranna({
//   weight: ["400"],
//   subsets: ["latin"],
// });

const sans = Poppins({
  // TODO: delete anything I don't finally use
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
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
        <SmoothScrolling>
          <Header />
          <div>{children}</div>
          <div className="lg:w-14 fixed right-16 top-0 h-full flex flex-col">
            <Social />
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
