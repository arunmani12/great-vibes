/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'card':'#FFFFFF',
      'card-border':'#E6E6E6',
      'text-color':'#212121',
      'placeholder':'#7A7A7A',
      'primary-color':'#1597E4',
      'white':'#FAFAFA',
      'err':'#D86161'
    }
  },
  plugins: [],
}
