import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@layouts/PublicLayout.vue'),
    children: [
      {
        path: '',
        name: 'init',
        component: () => import('@pages/InitPage.vue'),
      },
      {
        path: 'inicio-sesion',
        name: 'login',
        component: () => import('@pages/LoginPage.vue'),
      },
      {
        path: 'registro',
        name: 'register',
        component: () => import('@pages/RegisterPage.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'panel',
        component: () => import('@pages/PanelPage.vue'),
      },
      {
        path: 'perfil',
        name: 'profile',
        component: () => import('@pages/ProfilePage.vue'),
      },
      {
        path: 'soporte',
        name: 'support',
        component: () => import('@pages/SupportPage.vue'),
      },
      {
        path: 'pagos',
        name: 'pay',
        component: () => import('@pages/PayPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@pages/ErrorNotFound.vue'),
  },
]

export default routes
