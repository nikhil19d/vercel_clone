/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', ...fontFamily.sans],
        mono: ['Geist Mono', ...fontFamily.mono],
      },
      colors : {
        blue: '#0070FE',
        grayc: '#666666',
      },
      spacing: {
        'height-footer': '485px',
        'custom-width': '250px',
        'custom-width1': '80px',
        'custom-width2': '1080px',
        'custom-height-main': '3839px',
        'custom-height-main-div': '3659px',
        'block1': '718px',
        'block2': '270px',
        'block3': '577px',
        'block4': '440px',
        'block5': '530px',
        'block6': '142px',
        'block7': '710px',
        'block8': '232px',
      },
    },
  },
  plugins: [],
}
