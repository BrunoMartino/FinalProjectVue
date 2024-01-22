<template>
  <div>
    <UserForm :storedUser="store.user">
      <button class="btn btn__user-form" @click.prevent="UpdateUser">Atualizar Usuário</button>
    </UserForm>
  </div>
</template>

<script setup>
import UserForm from '@/components/UserForm.vue'
import { api } from '@/services.js'
import { useStore } from '@/stores/index.js'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const UpdateUser = () => {
  api.put(`/user/${store.user.id}`, store.user).then(() => {
    store.getUser(store.user.email)
    router.push({ name: 'user' })
  })
}
</script>
