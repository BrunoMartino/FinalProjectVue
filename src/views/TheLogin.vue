<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">E-mail</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="login.password" />
    </form>
    <button class="btn btn-login" @click.prevent="signIn">Entrar</button>
    <p class="forgot__password">
      <a href="/" target="_blank">Esqueceu sua senha? Clique aqui</a>
    </p>
  </section>
  <RegisterUser />
</template>

<script setup>
import RegisterUser from '@/components/RegisterUser.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const login = {
  email: '',
  senha: ''
}

const signIn = () => {
  store.dispatch('getUser', login.email)
  router.push({ name: 'user' })
}
</script>
