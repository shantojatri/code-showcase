import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }, 
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    }, 
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    }, 
    {
      path: '/auth/login',
      name: 'authLogin',
      component: () => import('@/views/auth/Login.vue')
    }, 
  ]
})

export default router
