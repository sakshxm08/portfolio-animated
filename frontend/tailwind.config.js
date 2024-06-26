/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
