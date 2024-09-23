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
        //sans: ['Geist', 'sans-serif'],
        sans: ['Geist Sans', ...fontFamily.sans],
       //mono: ['Geist Mono', ...fontFamily.mono],
      },
      colors : {
        primary: "#FAFAFA",
        blue: '#0070FE',
        grayc: '#666666',
        txtblue: '#0068D6',
        txtpurple: '#7820BC',
        svelte: '#ffe8e0',
        sveltebg: '#fff7f5',
        react: '#d4eef7',
        reactbg:'#f0fbff',
        python: '#f7ead4',
        pythonbg: '#fffaf0',
        nuxt: '#c7f5e2',
        nuxtbg: '#f0fff9',

      },
      spacing: {
        'height-footer': '485px',
        'custom-width': '250px',
        'custom-width1': '80px',
        'custom-width2': '1080px',
        'custom-height-main': '3839.83px',
        'custom-height-main-div': '3659.83px',
        'block1': '718.25px',
        'block2': '270px',
        'block2_1': '16px',
        'block3': '577px',
        'block4': '440.98px',
        'block5': '530px',
        'block6': '136px',
        'block7': '709.52px',
        'block8': '232px',
        'border-w': '1px',
        'gridadj': '117px'
      },
    },
  },
  plugins: [],
}
