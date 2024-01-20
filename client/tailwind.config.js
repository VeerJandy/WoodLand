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
    colors: {},
    borderRadius: {},
    transitionDuration: {},
    zIndex: {}
  },
  plugins: []
}
