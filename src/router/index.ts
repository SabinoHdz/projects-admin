import ProyecstLayout from '@/modules/projects/layout/ProyecstLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ProyecstLayout,
      redirect: 'projects',
      children: [
        {
          name: 'projects',
          path: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
        },
      ],
    },
  ],
});

export default router;
