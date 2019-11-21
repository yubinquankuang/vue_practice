// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

import onlyNumber from '@/components/common/el-input' // 输入框只输入数字

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(onlyNumber)

Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
