import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Active Window State
    activeWindow: 'nil', // Name of first window you want

    // Z-index counter
    zIndex: 2, // Z-index has to be incremented

    windows: [
      {
        id: 'WindowOne', // this needs to match ID and name
        windowState: 'close',
      },
      {
        id: 'WindowTwo',
        windowState: 'close',
      },
      // register your new windows here
    ]
    // State of windows will be linked to navbar icons
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      console.log(window)
      state.activeWindow = window
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      console.log("zindex upgraded" + this.zIndex)
      state.zIndex += 1
      document.getElementById(windowID).style.zIndex = state.zIndex
    },

    // Window State Mutator
    setWindowState(state, payload) { // payload = {'windowState': 'open', 'windowID': 'WindowOne'} 
      function getArrItem() {
        return state.windows.find(windows => windows.id === payload.windowID);
      }
      const window = getArrItem()
      if (payload.windowState == 'open') {
        window.windowState = payload.windowState
        setTimeout(() => {  
          this.commit("zIndexIncrement", payload.windowID)
        }, 1);
        setTimeout(() => {  
          this.commit("setActiveWindow", payload.windowID)
        }, 1);
      } else if (payload.windowState == 'close') {
        window.windowState = payload.windowState
        this.commit("setActiveWindow", "nil") // This depends on the OS you're mimicking (Window -> nil, MacOS -> Finder)
      } else if (payload.windowState == 'minimize') {
        window.windowState = payload.windowState
        this.commit("setActiveWindow", "nil")  // This depends on the OS you're mimicking (Window -> nil, MacOS -> Finder)
        console.log("minimized")
      } else {
        console.log("Error: windowState not found")
      }
    }
  },
  getters: {
    // Active Window Getter
    getActiveWindow: state => {
      return state.activeWindow
    },

    // WindowOne Getter
    getWindowOne: state => {
      return state.stateWindowOne
    },

    // WindowTwo Getter
    getWindowTwo: state => {
      return state.stateWindowTwo
    },
    
    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find(window => window.id === id)
    }
  }
})

// Notes:
// - Window state will need to be passed to store 'close', 'open', 'minimize'
// - State will be share with Navbar and main App, this will allow for the icon of navbar to be updated and app to present view
// - Z-index will be handled here instead of being encapsulated in window component

// Todo: 

