'use client';
import { deepOrange, green, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

const primary = {
    main: '',
    light: '',
    dark: '',
};

const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        //h1: heading,
        // h2: heading,
        // h3: heading,
        // h4: heading,
        // h5: heading,
        // h6: heading,
    },
    components: {},
    palette: {
        primary: deepOrange,
        secondary: red,
        success: green,
        warning: yellow,
        error: red,
        background: {
            default: "#ffffff",
        }
    },

});

export default theme;
