<template>
  <section class="container mx-auto products__container">
    <div v-if="products && products.length" class="product__wrapper">
      <div class="product" v-for="(product, index) in products" :key="index">
        <router-link to="/">
          <img v-if="product.imgs" :src="product.imgs[0].src" :alt="product.imgs[0].title" />
          <p class="product__price">{{ product.price }}</p>
          <h2 class="product__title">{{ product.name }}</h2>
          <p class="product__description">{{ product.description }}</p>
        </router-link>
      </div>
      <PaginationProducts :totalProducts="totalProducts" :productsInPages="productsInPages" />
    </div>
    <div v-else-if="products && products.length === 0">
      <h2 class="product__not-found">Ainda não temos esse item disponível</h2>
    </div>
  </section>
</template>

<script setup>
import PaginationProducts from './PaginationProducts.vue'
import { api } from '@/services.js'
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { serializeData } from '@/helpers.js'
const products = ref('')
const route = useRoute()
const totalProducts = ref(0)
const productsInPages = 9

const url = computed(() => {
  const query = serializeData(route.query)
  return `/product?_limit=9${query}`
})

const getProducts = () => {
  api.get(url.value).then((r) => {
    totalProducts.value = Number(r.headers['x-total-count'])
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
