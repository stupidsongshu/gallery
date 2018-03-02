// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5a98fb872091835c746e9648/www.gallery.com'
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
