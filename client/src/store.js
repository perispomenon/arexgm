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
    async registerUser ({ commit, state }, data) {
      const rsp = await axios.post('/api/user/register', data)
      return rsp
    }
  }
})
