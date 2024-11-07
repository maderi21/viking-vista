/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['"Cabin"', "sans-serif"],
      },
      colors: {
        primary: {
          light: "#EFC25D",
          dark: "#DC892E",
          green: "#36370E",
        },
        backround: "#F7E7CE",
        secondary: "#361D04",
        info: "242505",
        top: "E5F1F1",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/images/1.webp')",
        ex: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/ex.webp')",
        biking:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/biking.webp')",
        trekking:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/trekking.webp')",
        swimming:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/swimming.webp')",
        what: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/what.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
