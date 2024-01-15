<template>
  <h1 class="test">Página do usuário {{ store.user }}</h1>
</template>

<script setup>
import { useStore } from '@/stores/index.js'

const store = useStore()
</script>

<style></style>
