import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'home', 
      component: () => import('../views/index.vue')
    },
    {
      path: '/login',
      name: 'login', 
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register', 
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard', 
      component: () => import('../views/dashboard/Home.vue')
    },
  ]
})

export default router
