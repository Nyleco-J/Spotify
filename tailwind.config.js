/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#1D75DE',
        dark: '#000000',
        light: '#FFFFFF',
        green: '#056952',
        lgreen:'#C5F0C9',
      }
    },
    // container:{
    //   center: true,
    //   padding: '15px',
    // },
  },
  plugins: [],
}
