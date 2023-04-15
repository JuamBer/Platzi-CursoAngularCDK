/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        warning: colors.orange,
        danger: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
