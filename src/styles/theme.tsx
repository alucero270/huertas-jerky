'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        // h1: heading,
        // h2: heading,
        // h3: heading,
        // h4: heading,
        // h5: heading,
        // h6: heading,
    },
    components: {},
    palette: {
        // mode: "light",
        // green: "#28d655",
        // red: "#E32227 or BF0A30",
        // yellow:#FFD700
        background: {
            default: "#ffffff",
        }
    },

});

export default theme;
