/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    ".index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sister:["Love Ya Like A Sister", "cursive"]
      },
      boxShadow:{
        light:'0 3px 10px rgba(0,0,0,0.2)',
        dark:'0 0 5px #ffffff4d',
      }
    },
  },
  plugins: [],
}
