import { Poppins, Corinthia } from "next/font/google";

export const sans = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--sans",
});

export const serif = Corinthia({
  weight: "400",
  subsets: ["latin"],
  variable: "--serif",
});
