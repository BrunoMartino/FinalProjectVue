<template>
  <h1 class="test">Página do usuário {{ store.state.user }}</h1>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<style></style>
