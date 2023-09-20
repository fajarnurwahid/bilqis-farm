/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'lora': ['"Lora"', 'serif'],
      },
      backgroundImage: {
        'hero': 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("dist/img/hero.jpg")',
      }
    },
  },
  plugins: [],
}

