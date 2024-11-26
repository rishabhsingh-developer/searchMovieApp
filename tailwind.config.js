/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto Condensed"],
      },
      colors: {
        homeColor: "#581845",
        homeColor1: "#581845",
      },
    },
  },
  plugins: [],
};
