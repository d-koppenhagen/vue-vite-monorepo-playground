import path from 'path';
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'layout',
      filename: 'remoteEntry.js',
      remotes: {
        mfe1: 'http://localhost:5001/assets/remoteEntry.js',
        mfe2: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['vue', 'vue-router', 'pinia'],
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
    outDir: path.resolve(__dirname, '../../dist/packages/app-shell'),
    target: 'esnext',
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      // external: [
      //   path.resolve(__dirname, '../shared-lib/src/index.ts'),
      //   path.resolve(__dirname, '../ui-lib/src/index.ts'),
      // ],
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
