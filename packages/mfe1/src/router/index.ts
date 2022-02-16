import { createRouter, createWebHistory } from 'vue-router';
import FirstView from '../views/FirstView.vue';
import SecondView from '../views/SecondView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/route1',
      name: 'route1',
      component: FirstView,
    },
    {
      path: '/route2',
      name: 'route2',
      component: SecondView,
    },
  ],
});

export default router;
