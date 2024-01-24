<template>
  <section>
    <div v-if="acquisitions">
      <h2>Compras</h2>
      <div class="acquisition-wrapper" v-for="(acquisition, index) in acquisitions" :key="index">
        <ProductItem v-if="acquisition.product" :product="acquisition.product">
          <p class="seller"><span>Vendedor:</span> {{ acquisition.seller_id }}</p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue'
import { api } from '@/services.js'
import { useStore } from '@/stores'
import { onMounted, ref } from 'vue'

const store = useStore()

const acquisitions = ref(null)

const getAcquisitions = () => {
  api.get(`/transaction?buyer_id=${store.user.id}`).then((r) => {
    acquisitions.value = r.data
  })
}

onMounted(() => {
  if (store.login) {
    getAcquisitions()
  }
})
</script>

<style scoped>
.acquisition-wrapper {
  @apply mb-10;
}

.seller span {
  @apply text-[#e80];
}

h2 {
  @apply mb-5 text-xl font-semibold;
}
</style>
