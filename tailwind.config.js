/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chalkTitle: ['"Walter Turncoat"', ...defaultTheme.fontFamily.sans],
        chalkBody: ['"Architects Daughter"', ...defaultTheme.fontFamily.sans],
        sketchy: ['"Londrina Sketch"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
