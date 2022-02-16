import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { sharedLib } from '@vue-vite-monorepo-playground/shared-lib';

sharedLib();

const Mfe1App = defineAsyncComponent(() => import('mfe1/App'));
const Mfe2App = defineAsyncComponent(() => import('mfe2/App'));

const app = createApp(App);

app.component('mfe1-app', Mfe1App);
app.component('mfe2-app', Mfe2App);

app.use(createPinia());
app.use(router);

app.mount('#app');
