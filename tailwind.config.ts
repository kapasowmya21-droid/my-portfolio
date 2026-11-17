import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        foreground: "#f1f5f9",
        tech: {
          dark: "#060a12",
          card: "#0b1220",
          cardHover: "#0f1a2e",
          border: "#1e293b",
          borderHover: "#38bdf8",
          blue: "#38bdf8",
          blueGlow: "#0284c7",
          accent: "#7dd3fc"
        }
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ]
      },
      boxShadow: {
        "tech-glow": "0 0 25px -5px rgba(56, 189, 248, 0.25)",
        "tech-glow-lg": "0 0 35px -5px rgba(56, 189, 248, 0.4)",
      }
    },
  },
  plugins: [],
};
export default config;
