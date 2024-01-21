<template>
  <section class="register">
    <h2>Crie sua conta!</h2>
    <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
    <UserForm v-else>
      <button class="btn btn__create-user" @click.prevent="registerUser">Criar Usuário</button>
    </UserForm>
  </section>
</template>

<script setup>
import { useStore } from '@/stores/index.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserForm from './UserForm.vue'

const router = useRouter()
const store = useStore()
let create = ref(false)

const registerUser = async () => {
  try {
    await store.updateUser(store.user)
    console.log('User update successful')

    await store.createUser(store.user)
    console.log('User creation successful')

    await store.getUser(store.user.email)
    console.log('User get succesful')

    await router.push({ name: 'user' })
    console.log('Enter user page succesful')
  } catch (error) {
    console.error('Error during user registration:', error)
  }
}
</script>
