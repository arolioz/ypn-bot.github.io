module.exports = {
    purge: [],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                green: {
                    primary: '#A3E635',
                },
                gray: {
                    primary: '#111827',
                    inputTextColor: '#40444B',
                    backgroundMessageColor: '#36393F',
                    backgroundMessageColorHover: '#32353B',
                },
            },
            keyframes: {
                changeBackgroundColor: {
                    '0%': { background: '#686A6E' },
                    '50%': { background: '#B3B4B6' },
                    '100%': { background: ' #DCDDDE' },
                },
            },
            animation: {
                'changeBackgroundColor-1': 'changeBackgroundColor 2 infinite',
                'changeBackgroundColor-2': 'changeBackgroundColor 2.4 infinite',
                'changeBackgroundColor-3': 'changeBackgroundColor 2.8 infinite',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [],
};
