<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn btn__user-form" @click.prevent="checkout">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script setup>
import UserForm from './UserForm.vue'
import { api } from '@/services.js'
import { useStore } from '@/stores'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const props = defineProps({
  product: {
    type: Object
  }
})

const purchase = computed(() => {
  return {
    buyer_id: store.user.email,
    seller_id: props.product.user_id,
    product: props.product,
    address: {
      cep: store.user.cep,
      street: store.user.street,
      number: store.user.number,
      neighborhood: store.user.neighborhood,
      city: store.user.city,
      state: store.user.state
    }
  }
})

const registerBuyer = async () => {
  try {
    await store.updateUser(store.user)

    await store.createUser(store.user)

    await store.getUser(store.user.email)

    await createTransaction()
  } catch (error) {
    console.error('Error during user registration:', error)
  }
}

const createTransaction = () => {
  return api.post('/transaction', purchase.value).then(() => {
    router.push({ name: 'shopping' })
  })
}
const checkout = () => {
  if (store.login) {
    createTransaction()
  } else {
    registerBuyer()
  }
}
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
