import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFlashMessage from 'vue-flash-message'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
// import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
