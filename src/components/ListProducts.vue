<template>
  <section class="container mx-auto products__container">
    <div class="product__wrapper" v-for="product in products" :key="product.id">
      <img v-if="product.imgs" :src="product.imgs[0].src" :alt="product.imgs[0].title" />
      <p class="product__price">{{ product.price }}</p>
      <h2 class="product__title">{{ product.name }}</h2>
      <p class="product__description">{{ product.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const products = ref('')

const getProducts = () => {
  fetch('http://localhost:3000/product')
    .then((r) => r.json())
    .then((r) => {
      products.value = r
    })
}
onMounted(() => {
  getProducts()
})
</script>
