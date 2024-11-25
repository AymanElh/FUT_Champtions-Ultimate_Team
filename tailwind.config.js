/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{html, css, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'stadium': "url('../img/stadium_background.webp')"
      },
      screens: {
        'max-900': {max: '900px'},
      }
    },
  },
  plugins: [],
}

