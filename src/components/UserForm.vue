<template>
  <form class="user__form">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" v-model="user.name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" v-model="user.email" />
    <label for="password">Senha:</label>
    <input type="password" id="password" name="password" v-model="user.password" />
    <label for="cep">CEP:</label>
    <input type="text" name="cep" id="cep" v-model="user.cep" @keyup="fillCEP" />
    <label for="street">Rua:</label>
    <input type="text" name="street" id="street" v-model="user.street" />
    <label for="number">Número:</label>
    <input type="number" name="number" id="number" v-model="user.number" />
    <label for="neighborhood">Bairro:</label>
    <input type="text" name="neighborhood" id="neighborhood" v-model="user.neighborhood" />
    <label for="city">Cidade:</label>
    <input type="text" name="city" id="city" v-model="user.city" />
    <label for="state">Estado:</label>
    <input type="text" name="state" id="state" v-model="user.state" />

    <slot></slot>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { getCEP } from '@/services.js'
import { useStore } from '@/stores/index.js'

const store = useStore()

const user = computed(() => store.user)

const fillCEP = () => {
  const cepValue = user.value.cep.replace(/\D/g, '')
  console.log(user.value.cep)
  if (cepValue.length === 8) {
    getCEP(cepValue).then((r) => {
      user.value.street = r.data.logradouro
      user.value.neighborhood = r.data.bairro
      user.value.city = r.data.localidade
      user.value.state = r.data.uf
    })
  }
}
</script>
