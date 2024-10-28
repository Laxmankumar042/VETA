/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Orbitron':'"Orbitron", sans-serif',
        'NotoSans' : '"Noto Sans", sans-serif',
      },
      colors:{
        'primary' : '#91E506',
        'primaryDark' : '#91e506',
        'lightGray' : '#9ea4a5',
      },
      dropShadow:{
        'BoxShadow' : '20px 20px 10px 20px #91E506'
      },
      gridTemplateColumns:{
        '4Cols' : 'repeat(auto-fit,minmax(250px,1fr))'
      },
      gradientColorStops:{
        'gradi':'linear-gradient(to right bottom, #1e272a, #000000)'
      }
    },
  },
  plugins: [],
}

