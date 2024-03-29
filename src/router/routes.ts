import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Character.vue') }],
  },

  {
    path: '/campaign',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Campaign.vue') }],
  },

  {
    path: '/journal',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Journal.vue') }],
  },

  {
    path: '/challenges',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Challenges.vue') }],
  },

  {
    path: '/world',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/World.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
