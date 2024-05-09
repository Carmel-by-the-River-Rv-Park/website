const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
  	fontFamily: {
  		sans: ['"Josefin Sans"', 'san-serif'],
      serif: ['"EB Garamond"', 'serif']
  	},
    extend: {
      colors: {
        asparagus: {
          '50':  '#f8f9f6',
          '100': '#eef0e8',
          '200': '#d8e0cc',
          '300': '#aec09f',
          '400': '#7d9074',
          '500': '#597b49',
          '600': '#486134',
          '700': '#394929',
          '800': '#27321f',
          '900': '#191e16',
        },
        sepia: {
          '50':  '#fcfbf8',
          '100': '#f9f0dc',
          '200': '#f2d9b6',
          '300': '#e1b183',
          '400': '#ce8455',
          '500': '#b56233',
          '600': '#974822',
          '700': '#73361b',
          '800': '#4f2514',
          '900': '#32170d',
        },
      },
      minHeight: {
        '600': '600px',
        '400': '400px',
      },
      height: {
        '70vh': '70vh',
      }
    },
  },
  plugins: [
    // ...
  ]
};