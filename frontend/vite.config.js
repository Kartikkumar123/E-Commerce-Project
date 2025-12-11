import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Check the environment
const isRender = process.env.RENDER_ENV === 'render';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    usePolling: true,
  },
  build: {
    // Do not externalize react-router-dom, react-toastify, etc.
    rollupOptions: {
      external: [],
    rollupOptions: {
      external: isRender
        ? [] 
        : ['react-router-dom', 'react-toastify', 'react-toastify/dist/ReactToastify.css', 'axios'], // On Netlify, we externalize
    },
  },
}});

