import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
      dark: "#02143F",
      accent: "#8626F9",
      secondary: "#EA0874",
      white: "#FFFFFF",
      black: "#000000",
      light: "#f5f3f9",
    },
    fontFamily: {
      sans: ["var(--sans)"],
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ":root": {
          "--color-dark": theme("colors.dark"),
          "--color-accent": theme("colors.accent"),
          "--color-secondary": theme("colors.secondary"),
          "--color-white": theme("colors.white"),
          "--color-black": theme("colors.black"),
          "--color-light": theme("colors.light"),
        },
      });
    }),
  ],
  darkMode: "class",
};

export default config;
