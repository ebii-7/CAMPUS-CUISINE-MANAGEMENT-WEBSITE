import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/', // Ensures correct routing
    server: {
        host: 'localhost',
        port: 5173,
        open: true, // Opens browser automatically
    },
});
