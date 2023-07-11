/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ['Work Sans', 'sans-sans-serif'],
        // satisfy: ["Satisfy", "cursive"],
        // secular: ["Secular One", "sans-serif"],
      },

      colors: {
        wolgray: '#737373',
        wolblack: '#171717',
        wolwhite: '#c6c6c6',
        default: '#1d1d1d',
        active: '#202020',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    plugins: [],
  },
};
