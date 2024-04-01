import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1600px",
    },
    colors: {
      dark: "#141521",
      accent: "#4A5CFF",
      white: "#FFFFFF",
      black: "#000000",
      light: "#F2F4FF",
    },
    fontFamily: {
      sans: ["var(--sans)"],
      serif: ["var(--serif)"],
    },
    extend: {},
    darkMode: "class",
  },
  plugins: [],
  // mode: "jit",
};
export default config;
