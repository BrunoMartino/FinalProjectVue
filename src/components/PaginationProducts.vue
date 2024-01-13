<template>
  <ul v-if="totalPages > 1" class="page__list">
    <li v-for="page in pagesRange" :key="page" class="page">
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

const pagesRange = computed(() => {
  const currentPage = Number(route.query._page)
  const range = 9
  const offset = Math.ceil(range / 2)
  const total = totalPages.value // sempre chame value ao usar uma propertie
  const pagesArray = []

  for (let i = 1; i <= total; i++) {
    pagesArray.push(i)
  }

  pagesArray.splice(0, currentPage - offset)
  pagesArray.splice(range, total)

  return pagesArray
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
