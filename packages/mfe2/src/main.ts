import { createApp } from 'vue';

import App from './App.vue';

import { sharedLib } from '@vue-vite-monorepo-playground/shared-lib';

sharedLib();

const app = createApp(App);

app.mount('#app');
