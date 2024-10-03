import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:5173,usePolling:true},
   build: {
    rollupOptions: {
      external: ['react-router-dom'],
      external: ['react-toastify']
    }
  }
})
