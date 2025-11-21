import { heroui } from "@heroui/react";
import { relunaColors, sharedLayout } from "./config/themes";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pp-object-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: relunaColors.light,
          layout: sharedLayout,
        },
        dark: {
          colors: relunaColors.dark,
          layout: sharedLayout,
        },
      },
    }),
  ],
};

export default config;
