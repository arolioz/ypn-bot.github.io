module.exports = {
    purge: ['./public/*.html', './src/**/*.js'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                conifer: {
                    DEFAULT: '#A3E635',
                    50: '#FFFFFF',
                    100: '#F6FCEB',
                    200: '#E1F7BD',
                    300: '#CCF190',
                    400: '#B8EC62',
                    500: '#A3E635',
                    600: '#8ACE1A',
                    700: '#6CA114',
                    800: '#4D740E',
                    900: '#2F4609'
                },
                ebony: {
                    DEFAULT: '#111827',
                    50: '#425D97',
                    100: '#3C558A',
                    200: '#324672',
                    300: '#273759',
                    400: '#1C2740',
                    500: '#111827',
                    600: '#0F1623',
                    700: '#0E1420',
                    800: '#0C111C',
                    900: '#0B0F19'
                }
            }
        }
    },
    variants: {},
    plugins: []
};
