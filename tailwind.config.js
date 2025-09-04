/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#49326b',
        'purple-medium': '#4C1D95',
        'purple-light': '#7C3AED'
      }
    },
  },
  plugins: [],
}
