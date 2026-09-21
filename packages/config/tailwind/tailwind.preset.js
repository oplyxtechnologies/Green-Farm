/* Hallmark · macrostructure: crisp-modern · theme: fresh-dewy · genre: commercial
 * slop test: pass / all-gates-cleared
 */

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Fresh & Crisp Brand Palette (Strictly No Browns)
        krishi: {
          brand: "var(--color-primary, #0ea149)",
          mint: "var(--color-mint, #5DFF9E)",
          "mint-text": "var(--color-mint-text, #072E18)",
          dark: "var(--color-text, #0F1A15)",
          cream: "var(--color-background, #FCFDFD)",
          water: "var(--color-secondary, #2E8BC0)",
          sun: "var(--color-accent, #FFD166)",
          forest: "var(--color-primary-hover, #0B823A)",
          leaf: "#28B85A",
        },

        // Semantic bindings mapped directly to CSS variables
        background: {
          DEFAULT: "var(--color-background, #FCFDFD)",
          secondary: "var(--color-background-secondary, #F0F7F2)",
        },
        paper: {
          DEFAULT: "var(--color-background, #FCFDFD)",
          secondary: "var(--color-background-secondary, #F0F7F2)",
        },
        text: {
          DEFAULT: "var(--color-text, #0F1A15)",
          muted: "var(--color-text-muted, #4A5C52)",
        },
        ink: {
          DEFAULT: "var(--color-text, #0F1A15)",
          muted: "var(--color-text-muted, #4A5C52)",
          soft: "#1A2B23", // Cool dark green-gray
          faint: "#4A5C52", // Cool slate
        },
        primary: {
          DEFAULT: "var(--color-primary, #0ea149)",
          hover: "var(--color-primary-hover, #0B823A)",
          light: "var(--color-primary-light, #E8F5EB)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary, #2E8BC0)",
          hover: "var(--color-secondary-hover, #1F6992)",
          light: "var(--color-secondary-light, #EAF4F9)",
        },
        accent: {
          DEFAULT: "var(--color-accent, #FFD166)",
          hover: "var(--color-accent-hover, #FFC233)",
          light: "var(--color-accent-light, #FFF8E6)",
        },
        
        // A fresh, cool slate scale to replace the deleted brown/parchment scales.
        // Useful for borders, subtle backgrounds, and disabled states.
        slate: {
          950: "#08100C",
          900: "#0F1A15",
          800: "#1A2B23",
          700: "#2A4035",
          600: "#3B5446",
          500: "#4A5C52",
          400: "#708779",
          300: "#9FB3A7",
          200: "#C9D6CE",
          100: "#E8F0EA",
          50: "#F5F7F5",
        }
      },
      fontFamily: {
        // Modern, crisp typography mapping
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-plus-jakarta)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-plus-jakarta)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.025em",
        editorial: "-0.015em",
        subheading: "0.08em",
        monograph: "0.14em",
        spacious: "0.18em",
      },
      lineHeight: {
        editorial: "1.05",
        display: "1.08",
        prose: "1.75",
      },
      boxShadow: {
        // Updated to cool, slate-green shadows (replacing 'terroir' naming)
        "crisp-sm": "0 2px 6px -1px rgba(15, 26, 21, 0.06)",
        "crisp-md": "0 10px 28px -6px rgba(15, 26, 21, 0.08)",
        "crisp-lg": "0 24px 48px -12px rgba(15, 26, 21, 0.12)",
      },
    },
  },
  plugins: [],
};
