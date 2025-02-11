/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html",
            "./dev.js"],
  theme: {
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
    },

    extend: {
      colors: {
        'maincolor': '#333647',
      },
      screens: {
        '3xl': '1920px'
      },
    },
  },
  plugins: [
    "autoprefixer: {}",
  ],
}

