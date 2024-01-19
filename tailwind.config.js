/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/App.jsx'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      'main': ['abolition', 'sans-serif'], /* example: Player 1 */
      'mainSoft': ['abolition-soft', 'sans-serif'], 
      'sub': ['bdr-mono', 'sans-serif'],/* example: Monday */
      'smallText': ['din-2014', 'sans-serif'], /* example: game session scheduler */
    },
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        cyan: '#00E2FC',
        grey: '#BFCCD8',
        red: '#FF304D',
        darkGrey: '#312323',
        blue: '#009FFA',
        select: 'rgba(0, 226, 252, 0.7)',
        overlay: 'rgba(1,43,67, 0.88)',
      }
    },
  },
  plugins: [],
}

