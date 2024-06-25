const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          dark: '#1C1D1D',
          brand: '#707070',
        },
        green: {
          brand: '#5C553A',
          badge: '#5C7962',
        },
      },
    },
  },
  plugins: [],
};
