/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sm-gray": "#AAAAB2",
        "sm-light-gray": "#C9C9C9",
        "sm-med-gray": "#95919B",
        "sm-dark-gray": "#504F54",
        "sm-black": "#0D0B2D",
        "sm-blue": "#06A9DB",
        "sm-positive": "rgba(0, 178, 144, 1)",
        "sm-positive-faded": "rgba(0, 178, 144, 0.05)",
        sky: "#F4FBFD",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
