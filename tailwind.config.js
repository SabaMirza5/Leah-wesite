
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
             'primary':'#1E559B',
       },
    //    img:{
    // "background":"no-repeat",
    // "background-size":"cover",
    //    },
    },
  },
  plugins: [],
}