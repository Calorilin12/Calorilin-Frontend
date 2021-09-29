module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'olive': '#8B9E70',
      'white': '#ffffff',
      'black': '#000000',
      'darkBrown': '#28182A',
    }),
    borderColor: theme => ({
      DEFAULT: theme('colors.gray.200', 'currentColor'),
      'olive': '#8B9E70',
    }),
    textColor: {
      'darkBrown': '#28182A',
      'olive': '#8B9E70',
      'white': '#ffffff',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
