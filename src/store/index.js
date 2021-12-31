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

    // Z-index State
    zIndex: 2, 

    windows: [
      {
        windowId: "LoremIpsum", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Lorem Ipsum", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'Placeholder', // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "placeholder.png", // Window Icon Image
        altText: "Placeholder Icon", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "MacOS", 
        windowState: "close",
        displayName: "MacOS Theme",
        windowComponent: 'OSWindow',
        windowContent: 'MacOS',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "1vw",
        positionY: "1vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      {
        windowId: "Windows", 
        windowState: "close",
        displayName: "Windows Theme",
        windowComponent: 'OSWindow',
        windowContent: 'Windows',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "1vw",
        positionY: "1vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      {
        windowId: "Blueprint", 
        windowState: "close",
        displayName: "Blueprint Theme",
        windowComponent: 'OSWindow',
        windowContent: 'Blueprint',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "1vw",
        positionY: "1vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      {
        windowId: "PhotoWindow", 
        windowState: "close",
        displayName: "Photos",
        windowComponent: 'window',
        windowContent: 'Photos',
        windowContentPadding: {
          top: '5%',
          right: '5%',
          bottom: '5%',
          left: '5%'
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "placeholder.png",
        altText: "Placeholder Icon",
        fullscreen: false
      },
      // register your new windows here
    ],
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
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", payload.windowID);
        }, 0);
        if (preventAppendingOpenWindow == false) {
          setTimeout(() => {
            this.commit("pushActiveWindow", window);
          }, 0);
        }
      } else if (payload.windowState == "close") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("popActiveWindow", window);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", "nil"); 
        }, 0);
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
