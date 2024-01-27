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
    fontSize: {
      h1: ['var(--h1)', 'var(--lh-h1)'],
      h2: ['var(--h2)', 'var(--lh-h2)'],
      h3: ['var(--h3)', 'var(--lh-h3)'],
      h4: ['var(--h4)', 'var(--lh-h4)'],
      h5: ['var(--h5)', 'var(--lh-h5)'],
      h6: ['var(--h6)', 'var(--lh-h6)'],
      p: ['var(--p)', 'var(--lh-p)'],
      span: ['var(--span)', 'var(--lh-span)'],
      small: ['var(--small)', 'var(--lh-small)']
    },
    colors: {
      transparent: 'transparent',
      white: 'var(--white)',
      'white-opacity': 'var(--white-opacity)',
      black: 'var(--black)',
      'black-opacity': 'var(--black-opacity)',
      'material-primary': 'var(--material-primary)',
      'material-primary-dark': 'var(--material-primary-dark)',
      gray: {
        0: 'var(--gray-0)',
        1: 'var(--gray-1)',
        2: 'var(--gray-2)',
        3: 'var(--gray-3)',
        4: 'var(--gray-4)',
        5: 'var(--gray-5)',
        6: 'var(--gray-6)',
        7: 'var(--gray-7)',
        8: 'var(--gray-8)',
        9: 'var(--gray-9)'
      },
      blue: {
        0: 'var(--blue-0)',
        1: 'var(--blue-1)',
        2: 'var(--blue-2)',
        3: 'var(--blue-3)',
        4: 'var(--blue-4)',
        5: 'var(--blue-5)',
        6: 'var(--blue-6)',
        7: 'var(--blue-7)',
        8: 'var(--blue-8)',
        9: 'var(--blue-9)'
      },
      green: {
        0: 'var(--green-0)',
        1: 'var(--green-1)',
        2: 'var(--green-2)',
        3: 'var(--green-3)',
        4: 'var(--green-4)',
        5: 'var(--green-5)',
        6: 'var(--green-6)',
        7: 'var(--green-7)',
        8: 'var(--green-8)',
        9: 'var(--green-9)'
      },
      yellow: {
        0: 'var(--yellow-0)',
        1: 'var(--yellow-1)',
        2: 'var(--yellow-2)',
        3: 'var(--yellow-3)',
        4: 'var(--yellow-4)',
        5: 'var(--yellow-5)',
        6: 'var(--yellow-6)',
        7: 'var(--yellow-7)',
        8: 'var(--yellow-8)',
        9: 'var(--yellow-9)'
      },
      orange: {
        0: 'var(--orange-0)',
        1: 'var(--orange-1)',
        2: 'var(--orange-2)',
        3: 'var(--orange-3)',
        4: 'var(--orange-4)',
        5: 'var(--orange-5)',
        6: 'var(--orange-6)',
        7: 'var(--orange-7)',
        8: 'var(--orange-8)',
        9: 'var(--orange-9)'
      },
      red: {
        0: 'var(--red-0)',
        1: 'var(--red-1)',
        2: 'var(--red-2)',
        3: 'var(--red-3)',
        4: 'var(--red-4)',
        5: 'var(--red-5)',
        6: 'var(--red-6)',
        7: 'var(--red-7)',
        8: 'var(--red-8)',
        9: 'var(--red-9)'
      },
      purple: {
        0: 'var(--purple-0)',
        1: 'var(--purple-1)',
        2: 'var(--purple-2)',
        3: 'var(--purple-3)',
        4: 'var(--purple-4)',
        5: 'var(--purple-5)',
        6: 'var(--purple-6)',
        7: 'var(--purple-7)',
        8: 'var(--purple-8)',
        9: 'var(--purple-9)'
      },
      pink: {
        0: 'var(--pink-0)',
        1: 'var(--pink-1)',
        2: 'var(--pink-2)',
        3: 'var(--pink-3)',
        4: 'var(--pink-4)',
        5: 'var(--pink-5)',
        6: 'var(--pink-6)',
        7: 'var(--pink-7)',
        8: 'var(--pink-8)',
        9: 'var(--pink-9)'
      },
      coral: {
        0: 'var(--coral-0)',
        1: 'var(--coral-1)',
        2: 'var(--coral-2)',
        3: 'var(--coral-3)',
        4: 'var(--coral-4)',
        5: 'var(--coral-5)',
        6: 'var(--coral-6)',
        7: 'var(--coral-7)',
        8: 'var(--coral-8)',
        9: 'var(--coral-9)'
      }
    },
    borderRadius: {
      none: '0',
      low: 'var(--border-radius-low)',
      DEFAULT: 'var(--border-radius)',
      full: 'var(--border-radius-full)',
      circle: '50%'
    },
    transitionDuration: {
      0: '0s',
      DEFAULT: 'var(--transition)',
      low: 'var(--transition-low)'
    },
    zIndex: {
      toast: 'var(--z-index-toast)',
      popup: 'var(--z-index-popup)',
      modal: 'var(--z-index-modal)',
      header: 'var(--z-index-header)',
      high: 'var(--z-index-high)',
      medium: 'var(--z-index-medium)',
      low: 'var(--z-index-low)',
      one: 'var(--z-index-one)',
      minus: 'var(--z-index-minus)'
    }
  },
  plugins: []
}
