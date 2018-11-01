const routes = [
  {
    path: '/',
    name: 'home',
    meta: 'requireAuth',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  }
]

export default routes
