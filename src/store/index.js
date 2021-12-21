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
        windowId: 'WindowOne', // this needs to match ID, name and file name
        windowState: 'close',
        displayName: 'Window One',
        position: 'absolute',
        positionX: '15vw',
        positionY: '15vh',
        iconImage: 'placeholder.png',
      },
      {
        windowId: 'WindowTwo', // this needs to match ID, name and file name
        windowState: 'close',
        displayName: 'Window Two',
        position: 'absolute',
        positionX: '10vw',
        positionY: '10vh',
        iconImage: 'placeholder.png',
      },
      {
        windowId: 'DateTime', // this needs to match ID, name and file name
        windowState: 'close',
        displayName: 'Date Time',
        position: 'absolute',
        positionX: '12vw',
        positionY: '12vh',
        iconImage: 'placeholder.png',
      }
      // register your new windows here
    ]
    // State of windows will be linked to navbar icons
  },
  mutations: {
    // Active Window Mutator
    async setActiveWindow(state, window) {
      state.activeWindow = window
    },

    // Z-index increment function
    async zIndexIncrement(state, windowID) {
      state.zIndex += 1
      document.getElementById(windowID).style.zIndex = state.zIndex
    },

    // Window State Mutator
    setWindowState(state, payload) { // payload = {'windowState': 'open', 'windowID': 'WindowOne'} 
      function getArrItem() {
        return state.windows.find(windows => windows.windowId === payload.windowID);
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
        console.log(payload.windowID + "minimized")
      } else {
        console.log("Error: windowState not found or invalid")
      }
    }
  },
  getters: {
    // Active Window Getter
    getActiveWindow: state => {
      return state.activeWindow
    },

    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find(window => window.windowId === id)
    },

    getWindows: (state) => {
      return state.windows
    }
  }
})

// Notes:
// - Window state will need to be passed to store 'close', 'open', 'minimize'
// - State will be share with Navbar and main App, this will allow for the icon of navbar to be updated and app to present view
// - Z-index will be handled here instead of being encapsulated in window component

// Todo: 

