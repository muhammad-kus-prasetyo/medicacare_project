import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],

    server: {
        host: true,              // ❗ PENTING (bukan 0.0.0.0 atau localhost)
        port: 5173,
        strictPort: true,

        watch: {
            usePolling: true,    // ❗ wajib di Docker
            interval: 100,
        },

        hmr: {
            host: 'localhost',   // kalau buka di browser host
            port: 5173,
        },
    },
});