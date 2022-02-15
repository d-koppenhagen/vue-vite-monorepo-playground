import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { sharedLib } from '@vue-vite-monorepo-playground/shared-lib';

sharedLib();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
