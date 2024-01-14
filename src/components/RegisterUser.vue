<template>
  <section class="register">
    <h2>Crie sua conta!</h2>
    <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
    <UserForm v-else>
      <button class="btn">Criar Usuário</button>
    </UserForm>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import UserForm from './UserForm.vue'

let create = ref(false)
</script>
