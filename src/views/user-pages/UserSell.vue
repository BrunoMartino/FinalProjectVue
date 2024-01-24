<template>
  <section>
    <div v-if="sales">
      <h2>Compras</h2>
      <div class="acquisition-wrapper" v-for="(sale, index) in sales" :key="index">
        <ProductItem v-if="sale.product" :product="sale.product">
          <p class="buyer"><span>Vendedor:</span> {{ sale.seller_id }}</p>
        </ProductItem>
        <div class="address">
          <h3>Endereço de Envio</h3>
          <ul v-if="sale.address">
            <li v-for="(value, key) in sale.address" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </div>
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

const sales = ref(null)

const getSales = () => {
  api.get(`/transaction?seller_id=${store.user.id}`).then((r) => {
    sales.value = r.data
  })
}

onMounted(() => {
  if (store.login) {
    getSales()
  }
})
</script>

<style scoped>
.acquisition-wrapper {
  @apply mb-10;
}

.buyer span {
  @apply text-[#e80];
}

h2 {
  @apply mb-5 text-xl font-semibold;
}

.address {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 60px;
}

h3 {
  justify-self: end;
  margin: 0px;
  @apply text-lg font-semibold;
}
</style>
