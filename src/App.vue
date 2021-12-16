<template>
<div id="app">
    <div class="screen" id="screen" style="position: relative; z-index: 100;">
        <div v-for="window in windows" :key="window.key">
            <div v-on:click="openWindow(window.windowId)" style="z-index: 1000; color: white;" class="square">{{window.displayName}}</div>
        </div>  
        <div v-for="window in windows" :key="window.key">
            <component v-bind:is="window.windowId" :id="window.windowId" :style="{position: window.position, left: window.positionX, top: window.positionY}" v-if="windowCheck(window.windowId)"></component>
        </div>
        <!-- Todo:
        - Extract v-if into a function 
        - Create separate app grid -->
    </div>
    <navbar />
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import WindowOne from './components/WindowOne.vue'
import WindowTwo from './components/WindowTwo.vue'
export default {
    name: 'App',
    data: function () {
        return {
            windows: this.$store.getters.getWindows
        }
    },
    components: {
        WindowOne,
        WindowTwo,
        Navbar,
    },
    computed: {
        style() {
            return {
                '--fullscreen': window.innerHeight - 50 + "px" // 50px is the height of the Navbar component
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
    methods: {
        openWindow(windowId) {
            const payload = {
                'windowState': 'open',
                'windowID': windowId
            }
            this.$store.commit('setWindowState', payload)
        },

        windowCheck(windowId) {
            console.log(windowId)
            if (this.$store.getters.getWindowById(windowId).windowState=='open') {
                return true
            }
        }
        // we need methods to interact with private states in encapsulated components
    }
}
</script>

<style>
html {
    overflow: hidden;
}

.square {
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 12px;
    margin: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.square:hover {
    cursor: pointer;
}

#app {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
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
    background: #405CB1;
    background-size: 20px 20px;
    background-image: linear-gradient(to right, rgb(154, 190, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgb(154, 190, 255, 0.2) 1px, transparent 1px);
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
