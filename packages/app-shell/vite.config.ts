import path from 'path';
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@vue-vite-monorepo-playground/shared-lib': path.resolve(
        __dirname,
        '../shared-lib/src/index.ts'
      ),
      '@vue-vite-monorepo-playground/ui-lib': path.resolve(
        __dirname,
        '../ui-lib/src/index.ts'
      ),
    },
  },
  build: {
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ['@vue-vite-monorepo-playground/shared-lib'],
    },
  },
});
