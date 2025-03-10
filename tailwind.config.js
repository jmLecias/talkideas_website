/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#345801',
                'primary-light': '#4F7D11',
                'accent': '#E29B03',
                'accent-dark': '#c98902',
                'light-bg': '#f7f9f0',
            }
        },
    },
    plugins: [require("tailgrids/plugin")],
}
