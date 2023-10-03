/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#304652',
          dark: '#213038',
          light: '#6794ad',
          contrastColor: '#FFFFFF',
        },
      },
      textColor: {
        primary: '#4d4d4d',
        secondary: '#999',
        contrastPrimary: 'rgba(255,255,255,0.8)',
        backgroundText: '#FAFAFA',
      }
    },
    screens: {
      xs: { max: '0px' },
      sm: { max: '600px' },
      md: { max: '960px' },
      lg: { max: '1280px' },
      xl: { max: '1920px' },
    },
    boxShadow: {
      card: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }
  },
  plugins: [],
}

