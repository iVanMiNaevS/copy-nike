/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                70: "70px",
            },
            colors: {
                darkColor: "#393E46",
                lightGreen: "#AAD8D3",
                ctGreen: "#00ADB5",
            },
        },
    },
    plugins: [],
};
