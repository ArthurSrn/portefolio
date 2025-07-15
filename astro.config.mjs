import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import tailwindcss from "@tailwindcss/vite";


import react from '@astrojs/react';


const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
    integrations: [storyblok({
        accessToken: env.STORYBLOK_TOKEN,
        components: {
            page: "storyblok/Page",
            grid: "storyblok/Grid",
            feature: "storyblok/Feature",
            teaser: "storyblok/Teaser",
            navbar: "storyblok/Navbar",

        },
        apiOptions: {
            // Choisissez la région de votre espace Storyblok
            region: 'eu', // facultatif,  ou 'eu' (par défaut)
        },
    }), react()],
    output: 'server',
    server: {
        port: 3000,
    },
    vite: {
        plugins: [mkcert(), tailwindcss()],
    },
});