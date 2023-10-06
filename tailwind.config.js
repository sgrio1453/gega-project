/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'gemunu': ['Gemunu Libre', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

