<template>
  <section class="container mx-auto products__container">
    <div v-if="products && products.length" class="product__wrapper">
      <div class="product" v-for="product in products" :key="product.id">
        <router-link to="/">
          <img v-if="product.imgs" :src="product.imgs[0].src" :alt="product.imgs[0].title" />
          <p class="product__price">{{ product.price }}</p>
          <h2 class="product__title">{{ product.name }}</h2>
          <p class="product__description">{{ product.description }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="products && products.length === 0">
      <h2 class="product__not-found">Ainda não temos esse item disponível</h2>
    </div>
  </section>
</template>

<script setup>
import { api } from '@/services.js'
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { serializeData } from '@/helpers.js'
const products = ref('')
const route = useRoute()

const url = computed(() => {
  const query = serializeData(route.query)

  return `/product?_limit=10${query}`
})

const getProducts = () => {
  api.get(url.value).then((r) => {
    console.log(r)
    products.value = r.data // usar o data para acessar as propriedades
  })
}

onMounted(() => {
  getProducts()
})

watch(
  () => url.value,
  () => {
    getProducts()
  }
)
</script>
