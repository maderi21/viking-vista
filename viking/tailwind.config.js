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
        accommodation: "url('./src/images/2.jpg')",
        experience: "url('./src/images/3.jpg')",
        contact: "url('./src/images/4.jpg')",
        gift: "url('./src/images/5.jpg')",
      },
    },
  },
  plugins: [],
};
