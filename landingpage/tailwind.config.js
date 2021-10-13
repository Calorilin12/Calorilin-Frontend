module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     'primary': '#27AE61',
    }),
    borderColor: theme => ({
      'primary': '#27AE61',
      'white'  : '#ffffff',
     }),
     textColor: {
      'primary': '#1E272E',
      'secondary': '#27AE61',
      'white'  : '#ffffff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
