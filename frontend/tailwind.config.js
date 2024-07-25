/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#edfdfe",
          100: "#d2f9fb",
          200: "#aaf0f7",
          300: "#70e3f0",
          400: "#4cd4e6",
          500: "#12b0c8",
          600: "#128da8",
          700: "#167288",
          800: "#1b5c6f",
          900: "#1b4d5e",
          950: "#0c3240",
        },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  safelist: ["bg-[#b8e4b8]", "bg-[#199982]", "bg-[#ffffff]"],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
