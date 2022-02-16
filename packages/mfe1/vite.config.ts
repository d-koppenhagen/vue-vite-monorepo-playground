import path from 'path';
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  plugins: [
    vue(),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],
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
    outDir: path.resolve(__dirname, '../../dist/packages/mfe1'),
    target: 'esnext',
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ['@vue-vite-monorepo-playground/shared-lib'],
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
