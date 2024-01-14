<template>
  <section>
    <div v-if="product" class="product__container">
      <ul class="product__imgs" v-if="product.imgs">
        <li v-for="(img, index) in product.imgs" :key="index">
          <img :src="img.src" :alt="img.title" />
        </li>
      </ul>
      <div class="product__info">
        <h1 class="product__title">{{ product.name }}</h1>
        <p class="product__price">{{ toCurrency(product.price) }}</p>
        <p class="product__description">{{ product.description }}</p>
        <button class="btn buy-btn" v-if="product.sold === 'false'">Comprar</button>
        <button class="btn buy-btn" v-else disabled></button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script setup>
import LoadingPage from '@/components/LoadingPage.vue'
import { toCurrency } from '@/helpers'
import { api } from '@/services.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const product = ref('') //usar .data para acessar os valores
// eslint-disable-next-line no-unused-vars
const props = defineProps(['id'])
const route = useRoute()

const getProduct = () => {
  api.get(`/product/${route.params.id}`).then((r) => {
    product.value = r.data
  })
}

onMounted(() => {
  getProduct()
})
</script>
