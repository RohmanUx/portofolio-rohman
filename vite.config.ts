import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Ensure the PostCSS config file is referenced properly
  },
  server: {
    hmr: {
      overlay: true, // Optional to disable error overlay
    }
  }
})
