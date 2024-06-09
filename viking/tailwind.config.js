/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#EFC25D",
          dark: "#DC892E",
        },
        secondary: "#361D04",
        info: "242505",
        top: "E5F1F1",
      },
    },
  },
  plugins: [],
};
