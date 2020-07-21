import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = true

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')