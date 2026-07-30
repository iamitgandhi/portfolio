/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          muted: "hsl(var(--surface-muted) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "hsl(var(--ink) / <alpha-value>)",
          muted: "hsl(var(--ink-muted) / <alpha-value>)",
          faint: "hsl(var(--ink-faint) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-fg) / <alpha-value>)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",
        tag: {
          bg: "hsl(var(--tag-bg) / <alpha-value>)",
          fg: "hsl(var(--tag-fg) / <alpha-value>)",
          edge: "hsl(var(--tag-edge) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Instrument Sans",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "Cascadia Mono",
          "monospace",
        ],
      },
      maxWidth: {
        read: "720px",
        prose: "62ch",
      },
      boxShadow: {
        card: "0 1px 2px hsl(0 0% 0% / 0.04), 0 6px 20px hsl(0 0% 0% / 0.05)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s ease-out both",
        "fade-in": "fade-in 0.45s ease-out both",
      },
    },
  },
  plugins: [],
};
