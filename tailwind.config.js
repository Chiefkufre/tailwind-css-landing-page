/** @type {import('tailwindcss').Config} */

const colorMix = require('tailwindcss-color-mix');

module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',

        // EasyBanking Primary
        darkBlueColor: "hsl(233, 26%, 24%)",
        limeGreenColor: "hsl(136, 65%, 51%)",
        brightCyanColor: "hsl(192, 70%, 51%)",

        // EasyBanking Neutral
        grayishBlueColor: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGrayColor: "hsl(0, 0%, 98%)",
        whiteColor: "hsl(0, 0%, 100%)",
        mixed: 'color-mix(in hsl, var(--limeGreenColor)60%, var(--brightCyanColor)40%)'
      },
    },
  },
  plugins: [
    colorMix(),
  ],
}

