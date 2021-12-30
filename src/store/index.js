import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Height of Fullscreen Window
    fullscreenWindowHeight: window.innerHeight + "px",

    // Active Window State
    activeWindow: "nil", 

    // Active Windows Array State
    activeWindows: [],

    // Z-index counter
    zIndex: 2, // Z-index has to be incremented

    windows: [
      {
        windowId: "WindowOne", // this needs to match ID, name and file name
        windowState: "close",
        displayName: "Window One",
        windowContent: 'placeholder',
        position: "absolute",
        positionX: "10vw",
        positionY: "15vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      {
        windowId: "WindowTwo", // this needs to match ID, name and file name
        windowState: "close",
        displayName: "Window Two",
        windowContent: 'placeholder',
        position: "absolute",
        positionX: "8vw",
        positionY: "10vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      {
        windowId: "DateTime", // this needs to match ID, name and file name
        windowState: "close",
        displayName: "Date Time",
        windowContent: 'placeholder',
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      // register your new windows here
    ],
    // State of windows will be linked to navbar icons
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      state.activeWindow = window
    },

    // Pushes Active Window onto Active Windows Array
    pushActiveWindow(state, window) {
      state.activeWindows.push(window)
    },

    // Removes Active Window from Active Windows Array
    popActiveWindow(state, window) {
      const windowIndex = state.activeWindows.indexOf(window);
      if (windowIndex !== -1) {
        state.activeWindows.splice(windowIndex, 1)
      }
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      state.zIndex += 1
      document.getElementById(windowID).style.zIndex = state.zIndex
    },

    // Set height of max-height of fullscreen window
    setFullscreenWindowHeight(state, height) {
      state.fullscreenWindowHeight = height
    },

    setFullscreen(state, payload) {
      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();
      window.fullscreen = payload.fullscreen;
    },

    // Window State Mutator
    setWindowState(state, payload) {
      // payload = {'windowState': 'open', 'windowID': 'WindowOne'}

      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();

      var preventAppendingOpenWindow = false;
      if (window.windowState == "open" || window.windowState == "minimize") {
        preventAppendingOpenWindow = true;
      }

      if (payload.windowState == "open") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("zIndexIncrement", payload.windowID);
        }, 1);
        setTimeout(() => {
          this.commit("setActiveWindow", payload.windowID);
        }, 1);
        if (preventAppendingOpenWindow == false) {
          setTimeout(() => {
            this.commit("pushActiveWindow", window);
          }, 1);
        }
      } else if (payload.windowState == "close") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("popActiveWindow", window);
        }, 1);
        setTimeout(() => {
          this.commit("setActiveWindow", "nil"); 
        }, 1);
      } else if (payload.windowState == "minimize") {
        window.windowState = payload.windowState;
        this.commit("setActiveWindow", "nil"); 
      } else {
        console.log("Error: windowState not found or invalid");
      }
    },
  },
  getters: {
    // Active Window Getter
    getActiveWindow: (state) => {
      return state.activeWindow;
    },

    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id);
    },

    getWindowFullscreen: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id).fullscreen;
    },

    getWindows: (state) => {
      return state.windows;
    },

    getActiveWindows(state) {
      return state.activeWindows;
    },

    getFullscreenWindowHeight(state) {
      return state.fullscreenWindowHeight;
    },
  },
});
