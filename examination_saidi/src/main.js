import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' //引入
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
