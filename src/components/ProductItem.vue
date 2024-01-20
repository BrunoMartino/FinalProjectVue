<template>
  <div class="product-item" v-if="product">
    <router-link class="product-item__img" :to="{ name: 'product', params: { id: product.id } }">
      <img v-if="product.imgs" :src="product.imgs[0]" :alt="product.imgs[0].title" />
      <p>Ver Produto</p>
    </router-link>
    <div class="product-item__info">
      <p class="products__price">{{ toCurrency(product.price) }}</p>
      <h2 class="products__title">{{ product.name }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { toCurrency } from '@/helpers.js'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style></style>
