import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from 'moment'
import VueInteractJs from "vue-interactjs";

Vue.use(VueInteractJs)
Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
