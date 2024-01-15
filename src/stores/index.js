// stores/index.js

import { defineStore } from 'pinia'
import { api } from '@/services.js'

export const useStore = defineStore('user', {
  state: () => ({
    login: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: ''
    }
  }),
  actions: {
    updateLogin: function (payload) {
      this.login = payload // pode alterar estado dos objetos na store direto com actions.
    },
    updateUser: function (payload) {
      Object.assign(this.user, payload)
    },
    getUser: function (payload) {
      return api.get(`/user/${payload}`).then((response) => {
        this.updateUser(response.data)
        this.updateLogin(true)
      })
    },
    createUser: function (payload) {
      api.post('/user', payload)
    }
  }
})
