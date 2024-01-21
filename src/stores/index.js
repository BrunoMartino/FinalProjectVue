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
    },
    userProducts: null
  }),
  actions: {
    updateUserProducts: function (payload) {
      this.userProducts = payload // context sempre é acessado com -this-
    },
    addUserProducts: function (payload) {
      this.userProducts.unshift(payload)
    },
    getUserProducts: function () {
      return api.get(`/product?user_id=${this.user.id}`).then((r) => {
        this.updateUserProducts(r.data)
      })
    },
    updateLogin: function (payload) {
      this.login = payload // pode alterar estado dos objetos na store direto com actions.
    },
    updateUser: function (payload) {
      payload.id = payload.email
      this.user = payload
    },
    getUser: function (payload) {
      return api.get(`/user/${payload}`).then((response) => {
        this.updateUser(response.data)
        this.updateLogin(true)
        this.getUserProducts()
      })
    },

    createUser: function (payload) {
      api.post('/user', payload)
    },
    logoutUser: function () {
      this.updateUser({
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
      })
      this.updateLogin(false)
    }
  },
  getters: {}
})
