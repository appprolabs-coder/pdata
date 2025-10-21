// vite.config.js
})
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",          // if repo is username.github.io
  plugins: [react()],
});
