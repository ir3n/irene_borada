import { Poppins, Corinthia } from "next/font/google";

export const sans = Poppins({
  // TODO: delete anything I don't finally use
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--sans",
});

export const serif = Corinthia({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--serif",
});
