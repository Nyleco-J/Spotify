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
        hover:'#1ed760',
        lgreen:'#C5F0C9',
        bgray: '#EFEFEF',
        api: '#f59b23',
        shield: '#B02897',
        shield1: '#AF2896',
        note: '#B49BC8',
        ios: '#549DF5',
        android: '#F573A0',
        emb: '#FF7465',
        com: '#00A575'
      }
    },
    backgroundImage:{
      'feature': "url ('/img/feature.svg')"
    }
    // container:{
    //   center: true,
    //   padding: '15px',
    // },
  },
  plugins: [],
}
