/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat-semibold': ['Montserrat-Semibold', 'sans-serif'],
                'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
            },
        },
    },
    plugins: [],
}