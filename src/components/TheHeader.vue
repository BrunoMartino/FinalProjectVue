<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/ranek-assets/ranek.svg" alt="Ranek-logo" />
      </router-link>
      <router-link v-if="login" class="btn" to="/user">{{ userName }} </router-link>
      <router-link v-else class="btn" to="/login"> Vender / Login </router-link>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/index.js'

const store = useStore()
const login = computed(() => store.login)
const userName = computed(() => {
  return store.user.name.replace(/ .*/, '') //esse regex puxa sempre o primeiro nome
})
</script>

<style scoped>
nav {
  @apply flex items-center justify-between py-4 px-6 shadow-md;
}
.logo {
  @apply py-3;
}

.logo img {
  @apply w-24;
}
</style>
