import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import ListView from '@/views/ListView.vue';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/list-view',
      name: 'lis-view',
      component: ListView,
    }
  ],
});

export default routes;
