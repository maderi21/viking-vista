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
        secondary: "#361D04",
        info: "242505",
        top: "E5F1F1",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/images/1.jpg')",
        ex: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/ex.jpg')",
        biking:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/biking.jpg')",
        trekking:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/trekking.jpg')",
        swimming:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/swimming.jpg')",
        what: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./src/images/what.jpg')",
      },
    },
  },
  plugins: [],
};
