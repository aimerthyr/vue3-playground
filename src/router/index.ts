import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    redirect: '/home/practise',
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: 'practise',
        redirect: '/home/practise/modal',
        component: () => import('../views/practise/index.vue'),
        children: [
          {
            path: 'modal',
            component: () =>
              import('../views/practise/custom-modal/custom-modal.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
