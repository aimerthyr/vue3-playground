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
        redirect: '/home/practise/lowcode',
        component: () => import('../views/practise/index.vue'),
        children: [
          {
            path: 'lowcode',
            component: () => import('../views/practise/lowcode/lowcode.vue'),
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
