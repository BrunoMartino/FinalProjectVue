import Vuex from 'vuex'
import { api } from '@/services.js'

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      cep: '',
      street: '',
      number: '',
      city: '',
      state: ''
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    getUser(context, payload) {
      api.get(`/user/${payload}`).then((response) => {
        context.commit('UPDATE_USER', response.data)
        context.commit('UPDATE_LOGIN', true)
      })
    }
  }
})
