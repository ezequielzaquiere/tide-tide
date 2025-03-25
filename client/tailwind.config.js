/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html', // Incluye index.html
        './src/**/*.{js,ts,jsx,tsx}', // Archivos de React (JSX/TSX)
    ],
    theme: {
        extend: {
            colors: {
                dark: '#0A2540',
                deep: '#003F5C',
                blue: '#2F80ED',
                light: '#56CCF2',
                soft: '#F2F2F2',
                alert: '#EB5757',
            },
        },
    },
    plugins: [],
};
