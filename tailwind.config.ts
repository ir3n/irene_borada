import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1500px",
    },
    colors: {
      dark: "#141521",
      accent: "#4A5CFF",
      white: "#FFFFFF",
      black: "#000000",
      light: "#E0E0E0",
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
