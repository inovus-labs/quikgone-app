/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#FBFBFB', // background primary
        bgSecondary: '#FFFFFF', // background secondary
        primary: '#416D19', // button color / icon hover
        primary2: '#98C74F', // button color / icon hover
        secondary: '#F7440C', // button color / icon hover
        tertiary: '#EE5727', // button color / icon hover
        border: '#484848', // border / line color
        link: '#0035F0', // link color
    }},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

