<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'user' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'shopping' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'sales' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-edit' }">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="logout">Sair</button>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script setup>
import { useStore } from '@/stores'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const logout = () => {
  store.logoutUser()
  router.push('/login')
}
</script>
