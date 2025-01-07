/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          light: "#fefcbf",
          DEFAULT: "#facc15",
          dark: "#ca8a04",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
