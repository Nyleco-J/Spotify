/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#1D75DE',
        dark: '#000000',
        light: '#FFFFFF',
        green: '#1DB954',
      }
    },
    // container:{
    //   center: true,
    //   padding: '15px',
    // },
  },
  plugins: [],
}
