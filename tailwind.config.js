module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            'olive': '#8B9E70',
            'white': '#ffffff',
            'black': '#000000',
            'darkBrown': '#28182A',
            'primary100': '#D4FAD5',
            'primary500': '#27AE61',
            'secondary100': '#F8F8F8',
            'secondary300': '#DADADA',
            'netral100': '#E3F0F4',
            'success300': '#7BEA83',
        }),
        borderColor: theme => ({
            DEFAULT: theme('colors.red.400', 'currentColor'),
            'green': '#27AE61',
            'greyLight': '#DADADA',
        }),
        textColor: {
            'darkBrown': '#28182A',
            'olive': '#8B9E70',
            'white': '#ffffff',
            'darkBlue': '#1E272E',
            'primary500': '#27AE61',
            'primary300': '#7BE694',
            'secondary500': '#858585',
            'primary500': '#27AE61',
            'netral500': '#1E272E',
        }, 
    },
    variants: {
        extend: {},
    },
    plugins: [],
}  