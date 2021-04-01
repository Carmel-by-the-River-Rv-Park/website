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
  		sans: ['"Nunito Sans"', 'san-serif'],
      serif: ['"Lora"', 'serif']
  	},
    extend: {
      colors: {
        primary: {
          50:  '#f6fbfd',
          100: '#e6f7fd',
          200: '#c1e8fb',
          300: '#97d2fa',
          400: '#5da9fa',
          500: '#3688fc',
          600: '#1e58f2',
          700: '#1c45da',
          800: '#1835a7',
          900: '#142b80',
        },
      },
    },
  },
  plugins: [
    // ...
  ]
};