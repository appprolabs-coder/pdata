/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // or "/appprolabs-coder.github.io/" if it's not your user root
  plugins: [react()],
});
