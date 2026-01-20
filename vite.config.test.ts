import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// Vite config for the test app
export default defineConfig({
  root: resolve(__dirname, 'test-app'),
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('.', import.meta.url)) }
    ]
  },
  plugins: [vue()],
  server: {
    port: 5173,
  },
});
