import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async register ({ commit, state }, data) {
      const rsp = await axios.post('/api/user/register', data)
      return rsp
    },
    async login ({ commit, state }, data) {
      const rsp = await axios.post('/api/user/login', data)
      return rsp
    },
    async storeStats ({ commit, state }, data) {
      const rsp = await axios.put('/api/exercises', data)
      return rsp
    }
  }
})
