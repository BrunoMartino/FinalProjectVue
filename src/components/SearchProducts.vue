<template>
  <form class="searchbar">
    <input
      type="text"
      name="search"
      id="search"
      v-model="search"
      placeholder="Busque um produto..."
    />
    <input type="submit" value="search" id="magnifier" @click.prevent="searchProducts" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//useRouter altera direto na Url
//useRoute puxa propriedades presentes na Url

const search = ref('')
const router = useRouter()

const searchProducts = () => {
  router.push({ query: { q: search.value } })
}
</script>

<style></style>
