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
    <RegisterUser />
  </section>
</template>

<script setup>
import RegisterUser from '@/components/RegisterUser.vue'

const login = {
  email: '',
  senha: ''
}
</script>
