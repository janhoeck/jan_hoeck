const theme = require('./src/tools/theme/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme,
  plugins: [],
}

