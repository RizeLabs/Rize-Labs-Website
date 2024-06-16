/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        Main_Colour: "#5024F",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "0px 0px 10px white",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.25)",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          },
          ".text-shadow-md": {
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.15)",
          },
          ".text-shadow-lg": {
            textShadow: "0px 0px 5px white",
          },
          ".text-shadow-xl": {
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
          },
          ".text-shadow-none": {
            textShadow: "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
