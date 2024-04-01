/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      black: 'var(--black)'
    },
    borderRadius: {
      none: '0',
      low: 'var(--border-radius-low)',
      DEFAULT: 'var(--border-radius)',
      medium: 'var(--border-radius-medium)',
      big: 'var(--border-radius-big)',
      full: 'var(--border-radius-full)',
      circle: '50%'
    },
    transitionDuration: {
      0: '0s',
      DEFAULT: 'var(--transition)',
      low: 'var(--transition-low)',
      medium: 'var(--transition-medium)'
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
