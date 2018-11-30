import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {get, post} from './utils/axiosConfig'

Vue.use(VueAxios, axios)
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
