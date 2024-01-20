/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '93.75rem'
      }
    },
    fontSize: {},
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      gray: {
        0: 'var(--gray-0)',
        100: 'var(--gray-1)',
        200: 'var(--gray-2)',
        300: 'var(--gray-3)',
        400: 'var(--gray-4)',
        500: 'var(--gray-5)',
        600: 'var(--gray-6)',
        700: 'var(--gray-7)',
        800: 'var(--gray-8)',
        900: 'var(--gray-9)'
      },
      blue: {
        0: 'var(--blue-0)',
        100: 'var(--blue-1)',
        200: 'var(--blue-2)',
        300: 'var(--blue-3)',
        400: 'var(--blue-4)',
        500: 'var(--blue-5)',
        600: 'var(--blue-6)',
        700: 'var(--blue-7)',
        800: 'var(--blue-8)',
        900: 'var(--blue-9)'
      },
      green: {
        0: 'var(--green-0)',
        100: 'var(--green-1)',
        200: 'var(--green-2)',
        300: 'var(--green-3)',
        400: 'var(--green-4)',
        500: 'var(--green-5)',
        600: 'var(--green-6)',
        700: 'var(--green-7)',
        800: 'var(--green-8)',
        900: 'var(--green-9)'
      },
      yellow: {
        0: 'var(--yellow-0)',
        100: 'var(--yellow-1)',
        200: 'var(--yellow-2)',
        300: 'var(--yellow-3)',
        400: 'var(--yellow-4)',
        500: 'var(--yellow-5)',
        600: 'var(--yellow-6)',
        700: 'var(--yellow-7)',
        800: 'var(--yellow-8)',
        900: 'var(--yellow-9)'
      },
      orange: {
        0: 'var(--orange-0)',
        100: 'var(--orange-1)',
        200: 'var(--orange-2)',
        300: 'var(--orange-3)',
        400: 'var(--orange-4)',
        500: 'var(--orange-5)',
        600: 'var(--orange-6)',
        700: 'var(--orange-7)',
        800: 'var(--orange-8)',
        900: 'var(--orange-9)'
      },
      red: {
        0: 'var(--red-0)',
        100: 'var(--red-1)',
        200: 'var(--red-2)',
        300: 'var(--red-3)',
        400: 'var(--red-4)',
        500: 'var(--red-5)',
        600: 'var(--red-6)',
        700: 'var(--red-7)',
        800: 'var(--red-8)',
        900: 'var(--red-9)'
      },
      purple: {
        0: 'var(--purple-0)',
        100: 'var(--purple-1)',
        200: 'var(--purple-2)',
        300: 'var(--purple-3)',
        400: 'var(--purple-4)',
        500: 'var(--purple-5)',
        600: 'var(--purple-6)',
        700: 'var(--purple-7)',
        800: 'var(--purple-8)',
        900: 'var(--purple-9)'
      },
      pink: {
        0: 'var(--pink-0)',
        100: 'var(--pink-1)',
        200: 'var(--pink-2)',
        300: 'var(--pink-3)',
        400: 'var(--pink-4)',
        500: 'var(--pink-5)',
        600: 'var(--pink-6)',
        700: 'var(--pink-7)',
        800: 'var(--pink-8)',
        900: 'var(--pink-9)'
      },
      coral: {
        0: 'var(--coral-0)',
        100: 'var(--coral-1)',
        200: 'var(--coral-2)',
        300: 'var(--coral-3)',
        400: 'var(--coral-4)',
        500: 'var(--coral-5)',
        600: 'var(--coral-6)',
        700: 'var(--coral-7)',
        800: 'var(--coral-8)',
        900: 'var(--coral-9)'
      }
    },
    borderRadius: {
      none: '0',
      DEFAULT: 'var(--border-radius)',
      full: 'var(--border-radius-full)',
      circle: '50%'
    },
    transitionDuration: {},
    zIndex: {}
  },
  plugins: []
}
