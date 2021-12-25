<template>
<div id="app">
    <div 
        class="screen" 
        id="screen" 
    >
        <span 
            v-for="window in windows" 
            :key="window.key"
        >
            <component 
                :is="window.windowId" 
                :id="window.windowId" 
                :style="{position: window.position, left: window.positionX, top: window.positionY}" 
                v-if="windowCheck(window.windowId)"
            >
            </component>
        </span> 
        <app-grid></app-grid>
    </div>
    <navbar id="navbar" ref="navbar"/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import WindowOne from './components/WindowOne.vue'
import WindowTwo from './components/WindowTwo.vue'
import DateTime from './components/DateTime.vue'
import AppGrid from './components/AppGrid.vue'
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
        DateTime,
        Navbar,
        AppGrid,
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
        document.getElementById('screen').style.height = window.innerHeight - 50 + "px";
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
            if (this.$store.getters.getWindowById(windowId).windowState=='open') {
                return true
            }
        }
    },
}
</script>

<style>
@import './assets/css/normalize.css';

html {
    overflow: hidden;
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
    position: relative; 
    z-index: 100;
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
    background-size: 20px 20px;
    background:
        linear-gradient(-90deg, rgba(85, 150, 229, 0.15) 1px, transparent 1px),
        linear-gradient(rgba(85, 150, 229, 0.15) 1px, transparent 1px), 
        linear-gradient(-90deg, rgba(85, 150, 229, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(85, 150, 229, 0.1) 1px, transparent 1px),
        linear-gradient(transparent 3px, rgb(253, 253, 253) 3px, rgb(253, 253, 253) 78px, transparent 78px),
        linear-gradient(-90deg, rgb(141, 202, 255) 1px, transparent 1px),
        linear-gradient(-90deg, transparent 3px, rgb(253, 253, 253) 3px, rgb(253, 253, 253) 78px, transparent 78px),
        linear-gradient(rgb(141, 202, 255) 1px, transparent 1px),
        rgb(253, 253, 253);
    background-size:
        4px 4px,
        4px 4px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px,
        80px 80px;
}
</style>
