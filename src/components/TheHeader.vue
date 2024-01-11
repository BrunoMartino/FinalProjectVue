<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/ranek-assets/ranek.svg" alt="Ranek-logo" />
      </router-link>
      <router-link class="btn" to="/login"> Vender / Login </router-link>
    </nav>
  </header>
</template>

<script setup></script>

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
