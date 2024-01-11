<template>
  <section>
    <h1>Compre ou venda</h1>
    <SearchProducts />
    <ListProducts />
  </section>
</template>

<script setup>
import SearchProducts from '@/components/SearchProducts.vue'
import ListProducts from '@/components/ListProducts.vue'
</script>

<style scoped>
h1 {
  @apply text-3xl text-[#87f] mt-10 text-center font-semibold capitalize;
}
</style>
