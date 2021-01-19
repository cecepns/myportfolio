module.exports = {
    purge: [
        './pages/**/*.js', './components/**/*.js'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        textColor: {
            'primary': '#e91e63',
            'white': '#fff'
        },
        backgroundColor: {
            'primary': '#e91e63',
            'graysmooth': '#F4F4FF',
            'white': '#fff'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
