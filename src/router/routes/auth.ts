import { isLogin } from '@middlewares/authenticare';

export default () =>
([
  {
    path: 'inicio-sesion',
    name: 'login',
    beforeEnter: [isLogin],
    meta: {
      auth: false,
    },
    component: () => import('@pages/LoginPage.vue'),
  },
  {
    path: 'registro',
    name: 'register',
    beforeEnter: [isLogin],
    meta: {
      auth: false,
    },
    component: () => import('@pages/RegisterPage.vue'),
  },
])
