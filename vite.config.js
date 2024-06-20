import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": {
        target: 'http://127.0.0.1:3167',
        changeOrigin: true,
        
        rewrite: (path) => {
          const newPath = path.replace(/^\/api/, "/api");
          return newPath;
        },
      }
    },
  }
})
