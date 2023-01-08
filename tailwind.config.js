/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '1/12': '8.333333%',
      },
      width:{
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },
      margin:{
        '1/6': '16.666667%',
        '1/12': '8.333333%',
      },
      screens: {
        'xs': '480px'
      },
      borderRadius:{
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}