import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                main: ['Josefin Sans', 'sans-serif'],
                upload: ['Oooh Baby', 'cursive'],
            },
            colors: {
                main: "#EDEDED",
                secondary: "#212143",
                hover_secondary: '#464662',
                azka: '#6A91A7',
                upload: "#536D7C"
            },
            screens: {
                '3xl': '1920px',
              },
        },
    },

    plugins: [forms],
};
