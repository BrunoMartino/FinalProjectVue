import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'
import TheProduct from '@/views/TheProduct.vue'

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
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router
