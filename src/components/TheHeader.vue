<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/ranek-assets/ranek.svg" alt="Ranek-logo" />
      </router-link>
      <router-link v-if="store.state.login" class="btn" to="/user">{{ name }} </router-link>
      <router-link v-else class="btn" to="/login"> Vender / Login </router-link>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const name = computed(() => {
  return store.state.user.name.replace(/ .*/, '') //esse regex puxa sempre o primeiro nome
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
