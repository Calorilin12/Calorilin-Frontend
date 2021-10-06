module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            'white': '#FFFFFF',
            'black': '#000000',
            'primary100': '#D4FAD5',
            'primary500': '#27AE61',
            'secondary100': '#F8F8F8',
            'secondary300': '#DADADA',
            'secondary500': '#858585',
            'netral100': '#E3F0F4',
            'success300': '#7BEA83',
            'warning500': '#E23647',
        }),
        borderColor: theme => ({
            DEFAULT: theme('colors.red.400', 'currentColor'),
            'green': '#27AE61',
            'red':'#ff0000',
            'greyLight': '#DADADA',
        }),
        textColor: {
            'darkBrown': '#28182A',
            'olive': '#8B9E70',
            'white': '#FFFFFF',
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