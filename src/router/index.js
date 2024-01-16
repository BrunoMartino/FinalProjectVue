import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'
import TheProduct from '@/views/TheProduct.vue'
import TheLogin from '@/views/TheLogin.vue'
import TheUser from '@/views/user-pages/TheUser.vue'
import UserProducts from '@/views/user-pages/UserProducts.vue'
import UserEdit from '@/views/user-pages/UserEdit.vue'
import UserSell from '@/views/user-pages/UserSell.vue'
import UserBuy from '@/views/user-pages/UserBuy.vue'

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
      component: TheUser,
      children: [
        {
          path: '',
          name: 'user',
          component: UserProducts
        },
        {
          path: 'user-edit',
          name: 'user-edit',
          component: UserEdit
        },
        {
          path: 'shopping',
          name: 'shopping',
          component: UserBuy
        },
        {
          path: 'sales',
          name: 'sales',
          component: UserSell
        }
      ]
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router
