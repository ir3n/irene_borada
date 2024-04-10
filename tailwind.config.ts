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
      lg: "1025px",
      xl: "1600px",
    },
    colors: {
      dark: "#0f172a",
      accent: "#818cf8",
      secondary: "#ff0a78",
      white: "#FFFFFF",
      black: "#000000",
      light: "#eff1f5",
    },
    fontFamily: {
      sans: ["var(--sans)"],
      serif: ["var(--serif)"],
    },
    extend: {},
    darkMode: "class",
  },
  plugins: [],
  darkMode: "class",
  // mode: "jit",
};

export default config;
