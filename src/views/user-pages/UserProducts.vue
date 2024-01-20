<template>
  <section>
    <h2 class="mb-5">Adicionar Produto</h2>
    <AddProducts />
    <h2 class="mb-5">Seus Produtos</h2>
    <ul v-if="userProducts" class="user-products__list">
      <li v-for="(product, index) in userProducts" :key="index">
        <ProductItem :product="product">
          <p>{{ product.description }}</p>
        </ProductItem>
      </li>
    </ul>
  </section>
</template>

<script setup>
import AddProducts from '@/components/AddProducts.vue'
import ProductItem from '@/components/ProductItem.vue'

import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from '@/stores/index.js'
const store = useStore()

const login = ref(store.login)

const userProducts = computed(() => store.userProducts) //usar objetos da store como computed properties funciona melhor que como ref

watch(login, (newLogin) => {
  if (newLogin) {
    store.getUserProducts()
  }
})

onMounted(() => {
  if (login.value) {
    store.getUserProducts()
  }
})
</script>

<style></style>
