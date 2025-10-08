// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'appprolabs-coder' with the actual name of your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/appprolabs-coder/', // <-- Add this line for GitHub Pages deployment
})
