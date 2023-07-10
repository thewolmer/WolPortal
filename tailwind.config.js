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
        sans: ['Work Sans', 'sans-sans-serif'],
      },

      colors: {
        'light-surface-idle': '#f1f1f1',
        'light-surface-active': '#f6f6f7',
        'light-surface-hover': '#f2f2f3',
        'light-text-idle': '#3c3c43',
        'light-text-active': '#000000',

        'dark-surface-idle': '#171717',
        'dark-surface-active': '#1d1d1d',
        'dark-surface-hover': '#202020',
        'dark-text-idle': '#737373',
        'dark-text-active': '#c6c6c6',

        'primary-idle': '#41b883',
        'primary-active': '#008785',

        'secondary-idle': '#6100ed',
        'secondary-active': '#3700b4',

        error: '#ef4444',
        warning: '#cbb23b',
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
