import { getCurrentUser } from '@middlewares/authenticare';
import type { RouteRecordRaw } from 'vue-router'
import dashboard from './dashboard'
import errors from './errors'
import auth from './auth'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@layouts/PublicLayout.vue'),
    children: [
      {
        path: '',
        name: 'init',
        beforeEnter: [getCurrentUser],
        component: () => import('@pages/InitPage.vue'),
      },
      ...auth(),
    ],
  },
  dashboard(),
  errors(),
]

export default routes
