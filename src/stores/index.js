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
      this.login = payload
    },
    updateUser: function (payload) {
      Object.assign(this.user, payload)
    },

    getUser: function (payload) {
      return api.get(`/user/${payload}`).then((response) => {
        this.updateUser(response.data)
        this.updateLogin(true)
      })
    }
  }
})
