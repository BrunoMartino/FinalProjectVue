import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'
import TheProduct from '@/views/TheProduct.vue'
import TheLogin from '@/views/TheLogin.vue'
import TheUser from '@/views/user-pages/TheUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/product/:id',
      name: 'product',
      component: TheProduct,
      props: (route) => ({ id: route.params.id })
    },
    {
      path: '/login',
      name: 'login',
      component: TheLogin
    },
    {
      path: '/user',
      name: 'user',
      component: TheUser
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router
