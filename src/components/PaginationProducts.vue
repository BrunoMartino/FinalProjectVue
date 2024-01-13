<template>
  <ul v-if="totalPages > 1" class="page__list">
    <li v-for="page in totalPages" :key="page" class="page">
      <router-link :to="{ query: query(page) }" :class="{ active: isActive(page) }">{{
        page
      }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  totalProducts: {
    type: Number,
    default: 1
  },
  productsInPages: {
    type: Number,
    default: 1
  }
})

const totalPages = computed(() => {
  const total = Math.ceil(props.totalProducts / props.productsInPages) // não é preciso informar .value em props
  return total !== Infinity ? total : 0
})

const query = (page) => {
  return {
    ...route.query,
    _page: page
  }
}
const isActive = (page) => {
  return route.query._page === page.toString() //this function fix the problem on router-link exact active class
}
</script>
