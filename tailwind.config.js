/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{html, css, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'stadium': "url('../img/stadium_background.webp')",
        'shadowStadium': "url('../img/stadium.svg')",
        'card': "url('../img/badge_total_rush.webp')"
      },
      screens: {
        'max-900': {max: '900px'},
      }
    },
  },
  plugins: [],
}
