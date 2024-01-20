<template>
  <form class="add-product">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="product.name" />
    <label for="price">Preço (R$)</label>
    <input type="text" id="price" name="price" v-model="product.price" />
    <label for="imgs">Fotos</label>
    <input type="file" id="imgs" name="imgs" ref="imgs" />
    <label for="description">Descrição</label>
    <textarea id="description" name="description" v-model="product.description"></textarea>
    <input
      class="btn add-products__btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script setup>
import { useStore } from '@/stores/index.js'
import { api } from '@/services.js'

const store = useStore()

const product = {
  name: '',
  price: '',
  description: '',
  imgs: null
}

const formatProducts = () => {
  product.user_id = store.user.id
}

const addProduct = () => {
  formatProducts()
  api.post('/product', product).then(() => {
    store.getUserProducts()
  })
}
</script>

<style></style>
