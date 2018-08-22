import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const STATS = 'STATS'
const PROFILE = 'PROFILE'

export default new Vuex.Store({
  state: {
    user: null,
    profile: null,
    stats: []
  },
  mutations: {
    [LOGIN] (state, u) {
      state.user = u
    },
    [LOGOUT] (state) {
      state.user = null
    },
    [STATS] (state, s) {
      state.stats = s
    },
    [PROFILE] (state, p) {
      state.profile = p
    }
  },
  actions: {
    async register ({ commit, state }, input) {
      const { data } = await axios.post('/api/user/register', input)
      return data
    },
    async login ({ commit, state }, input) {
      const { data } = await axios.post('/api/user/login', input)
      commit(LOGIN, {
        login: data.login,
        email: data.email,
        id: data._id,
        city: data.city
      })
    },
    async logOut ({ commit, state }) {
      await axios.post('/api/user/logout')
      commit(LOGOUT)
    },
    async storeStats ({ commit, state }, input) {
      const { data } = await axios.put('/api/exercises', input)
      return data
    },
    async getStats ({ commit, state }, input) {
      const { data } = await axios.get('/api/exercises', input)
      commit(STATS, data)
    },
    async getUserProfile ({ commit, state }, id) {
      const { data } = await axios.get(`/api/user/${id}`)
      commit(PROFILE, data)
    },
    async saveUserProfile ({ commit, state }, input) {
      await axios.put(`/api/user/${input.id}`, input.data)
    }
  }
})
