const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ['Saira Condensed', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    filter: {
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      backgroundImage: () => ({
        'lotus': "url('/images/lotus.png')"
      }),
      maxWidth: {
        'xxs': '10rem'
      },
      colors: {
        'pond': {
          'light': '#2a3b47',
          'DEFAULT': '#0E1317',
          'dark': '#0E1317',
        },
        gray: colors.coolGray,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('tailwindcss-filters')
  ],
}
