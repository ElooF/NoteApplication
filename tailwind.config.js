/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aether: {
          bg: "#050806",
          surface: "#0A120D",
          card: "#0E1A13",
          border: "#183324",
          primary: "#10B981",
          bright: "#00FF87",
          dim: "#054D2E",
          glow: "rgba(0, 255, 135, 0.15)",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
      },
      boxShadow: {
        'matrix-glow': '0 0 25px -5px rgba(0, 255, 135, 0.25)',
        'matrix-glow-lg': '0 0 40px 2px rgba(0, 255, 135, 0.35)',
      },
    },
  },
  plugins: [],
};