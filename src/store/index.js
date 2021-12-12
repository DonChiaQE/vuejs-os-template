import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// Notes:
// - Window state will need to be passed to store 'close', 'open', 'minimize'
// - State will be share with Navbar and main App, this will allow for the icon of navbar to be updated and app to present view
// - Z-index will be handled here instead of being encapsulated in window component

// Todo: 
// - Create states for window
// - Create Z-index states
