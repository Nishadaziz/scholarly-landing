/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0D10",      // near-black background
          surface: "#11151B", // card/nav surface
          red: "#FF2D2D",     // bold red accent
          red2: "#B30000",    // deeper red (hover/active)
          text: "#EDEFF3",    // off-white text
          muted: "#A7AFBD",   // muted text
          line: "rgba(255,255,255,0.10)", // subtle borders
        },
      },
      fontFamily: {
        en: ["Inter", "sans-serif"],
        bn: ["Noto Sans Bengali", "sans-serif"],
      },
    },
  },
  plugins: [],
};