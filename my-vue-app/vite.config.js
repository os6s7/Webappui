import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.PORT || 3000,
    strictPort: true
  },
  preview: {
    port: process.env.PORT || 3000,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});