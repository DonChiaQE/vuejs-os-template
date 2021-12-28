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
import Navbar from './components/blueprint/Navbar.vue'
/*-----------------------------------------------------------*\
    Use following snippet to import a windows themed navbar 
\*-----------------------------------------------------------*/
// import Navbar from './components/windows/Navbar.vue'
import WindowOne from './components/views/WindowOne.vue'
import WindowTwo from './components/views/WindowTwo.vue'
import DateTime from './components/views/DateTime.vue'
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
                '--fullscreen': this.$store.getters.getFullscreenWindowHeight
            };
        }
    },
    mounted() {
        /*------------------------------------------------*\
            This fixes height problems for mobile devices 
        \*------------------------------------------------*/

        document.getElementById('screen').style.height = window.innerHeight - 35 + "px";
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        function resetHeight() {
            document.body.style.height = window.innerHeight + "px";
            document.html.style.height = window.innerHeight + "px";
        }
        window.addEventListener("resize", resetHeight);

        let navbar = document.getElementById('navbar')
        let height = navbar.clientHeight
        this.$store.commit('setFullscreenWindowHeight', window.innerHeight - height + "px");
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
/*-------------------------------------------------------*\
    CSS Imports
    Change 'blueprint' to 'windows' to use windows theme
\*-------------------------------------------------------*/
@import './assets/css/utils/normalize.css';
@import './assets/css/blueprint/app.css'; 
@import './assets/css/blueprint/window.css'; 
@import './assets/css/blueprint/appgrid.css'; 

/*-------------------------------------------*\
    Utilities
\*-------------------------------------------*/

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
}

.screen {
    width: 100%;
    position: relative; 
    z-index: 999;
}

/*-------------------------------------------*\
    Fullscreen
\*-------------------------------------------*/

.fullscreen {
    left: 0 !important;
    position: relative;
    display: block;
    top: 0 !important;
    right: 0 !important;
}
</style>
