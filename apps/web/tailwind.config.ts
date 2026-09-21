import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  presets: [require("@green-farm/config/tailwind")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "krishi-brand": "#0ea149",
        "krishi-mint": "#5DFF9E",
        "krishi-mint-text": "#072E18",
        "krishi-dark": "#0F1A15",
        "krishi-cream": "#FCFDFD",
        "krishi-water": "#2E8BC0",
        "krishi-sun": "#FFD166",
        "krishi-forest": "#0B823A",
        "krishi-leaf": "#28B85A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-plus-jakarta)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-plus-jakarta)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "crisp-sm": "0 2px 6px -1px rgba(15, 26, 21, 0.06)",
        "crisp-md": "0 10px 28px -6px rgba(15, 26, 21, 0.08)",
        "crisp-lg": "0 24px 48px -12px rgba(15, 26, 21, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
