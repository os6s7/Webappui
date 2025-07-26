import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  root: './src',           // خلي المجلد الأساسي src
  build: {
    outDir: '../dist',     // خلي مجلد الخرج برا src حتى يظل بالمستوى الأعلى
    emptyOutDir: true,
  },
  server: {
    port: process.env.PORT || 3000,
    strictPort: true,
  },
  preview: {
    port: process.env.PORT || 3000,
    strictPort: true,
  },
});