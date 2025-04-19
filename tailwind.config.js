/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

