<template>
  <form class="user__form">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" v-model="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" v-model="email" />
    <label for="password">Senha:</label>
    <input type="password" id="password" name="password" v-model="password" />
    <label for="cep">CEP:</label>
    <input type="text" name="cep" id="cep" v-model="cep" />
    <label for="street">Rua:</label>
    <input type="text" name="street" id="street" v-model="street" />
    <label for="number">Número:</label>
    <input type="number" name="number" id="number" v-model="number" />
    <label for="neighborhood">Bairro:</label>
    <input type="text" name="neighborhood" id="neighborhood" v-model="neighborhood" />
    <label for="city">Cidade:</label>
    <input type="text" name="city" id="city" v-model="city" />
    <label for="state">Estado:</label>
    <input type="text" name="state" id="state" v-model="state" />
    <div class="btn__create-user" @click.prevent="userView">
      <slot></slot>
    </div>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from '@/stores/index.js'

const store = useStore()

const name = ref('')
const email = ref('')
const password = ref('')
const cep = ref('')
const street = ref('')
const number = ref('')
const neighborhood = ref('')
const city = ref('')
const state = ref('')

const user = computed(() => ({
  name: name.value,
  email: email.value,
  password: password.value,
  cep: cep.value,
  street: street.value,
  number: number.value,
  neighborhood: neighborhood.value,
  city: city.value,
  state: state.value
}))

const userView = () => {
  store.updateUser(user.value)
  console.log(store.user)
}
</script>
