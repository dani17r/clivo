import { isLogin } from '@middlewares/authenticare';

export default () =>
({
  path: '/dashboard',
  component: () => import('@layouts/MainLayout.vue'),
  beforeEnter: [isLogin],
  meta: {
    auth: true,
  },
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
});