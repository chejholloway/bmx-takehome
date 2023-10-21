/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DecimaPro', 'sans-serif'],
        sixta: ['Sixta', 'sans-serif'],
        br: ['BR Sonoma', 'sans-serif']
      },
      colors: {
        blue: {
          light: '#71c7e3 ',
          DEFAULT: '#51b3da',
          dark: '#489dbc',
        },
      },
    },
  },
  plugins: [require('tailwind-bootstrap-grid')()],
}

