<template>
  <section class="container mx-auto products__container">
    <transition name="fade" mode="out-in">
      <div v-if="products && products.length" class="product__wrapper" key="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img v-if="product.imgs" :src="product.imgs[0].src" :alt="product.imgs[0].title" />
            <p class="products__price">{{ toCurrency(product.price) }}</p>
            <h2 class="products__title">{{ product.name }}</h2>
            <p class="products__description">{{ product.description }}</p>
          </router-link>
        </div>
        <PaginationProducts :totalProducts="totalProducts" :productsInPages="productsInPages" />
      </div>
      <div v-else-if="products && products.length === 0" key="not-found">
        <h2 class="product__not-found">Ainda não temos esse item disponível</h2>
      </div>
      <LoadingPage v-else key="loading" />
    </transition>
  </section>
</template>

<script setup>
import PaginationProducts from './PaginationProducts.vue'
import LoadingPage from './LoadingPage.vue'
import { api } from '@/services.js'
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { serializeData, toCurrency } from '@/helpers.js'
const products = ref('')
const route = useRoute()
const totalProducts = ref(0)
const productsInPages = 9

const url = computed(() => {
  const query = serializeData(route.query)
  return `/product?_limit=9${query}`
})

const getProducts = () => {
  products.value = null
  setTimeout(() => {
    api.get(url.value).then((r) => {
      totalProducts.value = Number(r.headers['x-total-count'])
      products.value = r.data // usar o data para acessar as propriedades
    })
  }, 1500)
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
