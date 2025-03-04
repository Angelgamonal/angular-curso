/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto': 'auto 1fr'
      }
    },
  },
  plugins: [],
}

