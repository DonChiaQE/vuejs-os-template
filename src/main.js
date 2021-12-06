import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueInteractJs from "vue-interactjs";

Vue.use(VueInteractJs)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
