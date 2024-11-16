/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'text-Lmode': '#1f1f1f',
      'background-Lmode': '#e6e6e6',
      'primary-Lmode': '#f5af00',
      'secondary-Lmode': '#ffd15c',
      'accent-Lmode': '#ce2764',
      'correct-Lmode': '#9CC15C',
      'error-Lmode': '#DE3F3F'
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

