//  @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        poppin: ["Work Sans", "sans-sans-serif"],
        // satisfy: ["Satisfy", "cursive"],
        // secular: ["Secular One", "sans-serif"],
      },

      colors: {
        'wolgray': '#737373', 
        'wolblack': '#171717',
        'wolwhite': '#c6c6c6',
        'default': '#1d1d1d',
        'active': '#202020',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    }
  },
  plugins: [],
}
}
