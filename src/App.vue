<template>
  <div id="app">
    <div class="screen" id="screen" style="position: relative; z-index: 100;">
      <div v-on:click="openWindow" style="z-index: 1000; color: white;" class="square">click here</div>
      <Window style="position: absolute;" :WindowFullscreenStateProp="false" :WindowIconStateProp="red" :WindowStateProp="close" :WindowZIndexProp="1"></Window>
      <!-- 
        Todo:
        - Hide window using state within App.vue
        - Pass state of window to Navbar.vue
        - Check store for more notes
       -->
    </div>
    <navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Window from './components/Window.vue'
export default {
  name: 'App',
  data: function() {
    return {

    }
  },
  components: {
    Window,
    Navbar
  },
  computed: {
        style() {
            return {
                '--fullscreen': window.innerHeight - 40 + "px" // 40px is the height of the Navbar component
            };
        }
    },
  mounted() {
        // Ensures windows can move freely
        document.getElementById('screen').style.height = window.innerHeight - 40 + "px";
        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        function resetHeight() {
            // reset the body height to that of the inner browser
            document.body.style.height = window.innerHeight + "px";
            document.html.style.height = window.innerHeight + "px";
        }
        // reset the height whenever the window's resized
        window.addEventListener("resize", resetHeight);
        // called to initially set the height.
        resetHeight();
    },
  methods : {
    // we need methods to interact with private states in encapsulated components

  }
}
</script>

<style>
html {
    overflow: hidden;
}

.square {
  width: 100px;
  height: 100px;
  background-color: #000;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    flex-direction: column;
    overflow: hidden;
}

.screen {
    width: 100%;
}

.fullscreen {
    left: 0 !important;
    position: relative;
    display: block;
    top: 0 !important;
    right: 0 !important;
}

body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: rgb(158, 158, 158);
}

body {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.bar-container {
    width: auto;
    height: 70px;
    background-color: rgba(255, 255, 255, .15);
    border: 1px solid rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>