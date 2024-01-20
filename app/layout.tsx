import type { Metadata } from "next";
import Header from "@/components/Header";
import Social from "@/components/Social";
import { sans } from "@/hooks/typography";

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
    <html lang="en">
      <body className={`${sans.className} bg-dark`}>
        <Header />
        {children}
        <div className="lg:w-14 fixed right-16 top-0 h-full flex flex-col">
          <Social />
        </div>
      </body>
    </html>
  );
}
