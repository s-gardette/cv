/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.vue", "./src/**/*.html", "./src/**/*.js"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                "8xl": ["8rem", "6.5rem"],
                "6xl": ["6rem", "4.5rem"],
                "5xl": ["5rem", "3.5rem"],
            },
            screens: {
                print: { raw: "print" },
                screen: { raw: "screen" },
            },
            fontFamily: {
                title: ["Richieschichue", "sans-serif"],
                display: ["Richieschichue", "sans-serif"],
                body: ["Bricolage Grotesque", "sans-serif"],
            },
            colors: {
                green: {
                    "50": "#e3f9e5",
                    "100": "#c1eac5",
                    "200": "#a3d9a5",
                    "300": "#7bc47f",
                    "400": "#57ae5b",
                    "500": "#3f913f",
                    "600": "#2f8132",
                    "700": "#207227",
                    "800": "#0e5814",
                    "900": "#05400a",
                },
                yellow: {
                    "50": "#fffbea",
                    "100": "#fff3c4",
                    "200": "#fce588",
                    "300": "#fadb5f",
                    "400": "#f7c948",
                    "500": "#f0b429",
                    "600": "#de911d",
                    "700": "#cb6e17",
                    "800": "#b44d12",
                    "900": "#8d2b0b",
                },
                blue: {
                    DEFAULT: "#1F4D98",
                    50: "#88ACE7",
                    100: "#77A0E3",
                    200: "#5588DC",
                    300: "#3371D5",
                    400: "#265EBA",
                    500: "#1F4D98",
                    600: "#153569",
                    700: "#0C1E3B",
                    800: "#02060C",
                    900: "#000000",
                    950: "#000000",
                },
                red: {
                    DEFAULT: "#630909",
                    "50": "#ffb3b3",
                    "100": "#ffa3a3",
                    "200": "#ff8a8a",
                    "300": "#ff5c5c",
                    "400": "#ff2424",
                    "500": "#f00000",
                    "600": "#c90303",
                    "700": "#9d0101",
                    "800": "#760404",
                    "900": "#630909",
                    "950": "#1a0000",
                },
                white: {
                    DEFAULT: "#FFF",
                    900: "#352a1b",
                    800: "#6a5535",
                    700: "#9f7f50",
                    600: "#bfa57f",
                    500: "#d9cab3",
                    400: "#e1d5c3",
                    300: "#e8e0d2",
                    200: "#f0eae1",
                    100: "#f7f5f0",
                    0: "#ffffff",
                },
                black: {
                    DEFAULT: "#050807",
                    900: "#050807",
                    800: "#0b100f",
                    700: "#101716",
                    600: "#161f1e",
                    500: "#1c2826",
                    400: "#405b57",
                    300: "#649089",
                    200: "#96b6b1",
                    100: "#cbdbd8",
                },
            },
        },
    },
    plugins: [],
};