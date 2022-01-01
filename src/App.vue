<template>
<div id="app">
    <top-navbar id="top-navbar"></top-navbar>
    <div class="screen" id="screen">
        <div 
            v-for="window in windows" 
            :key="window.key" 
            :aria-label="window.displayName"
        >
            <component
                :is="window.windowComponent" 
                :nameOfWindow="window.windowId" 
                :content_padding_bottom="window.windowContentPadding['bottom']"
                :content_padding_left="window.windowContentPadding['left']"
                :content_padding_right="window.windowContentPadding['right']"
                :content_padding_top="window.windowContentPadding['top']"
                :id="window.windowId" 
                :style="{position: window.position, left: window.positionX, top: window.positionY}" 
                v-if="windowCheck(window.windowId)"
            >
                <component 
                    :is="window.windowContent"
                    slot="content"
                >
                </component>
            </component>
        </div>
        <app-grid></app-grid>
    </div>
    <navbar id="navbar" />
</div>
</template>

<script>
/*------------------------------------------------------------*\
    Import Components, you can change the path for different
    component themes (blueprint, windows, macos)
\*------------------------------------------------------------*/
import Navbar from './components/blueprint/Navbar'
// import TopNavbar from './components/macos/TopNavbar.vue'
import Window from './components/template/Window'
import AppGrid from './components/AppGrid'
import Placeholder from './components/views/Placeholder'
import Photos from './components/views/Photos'
import OSWindow from './components/template/OSWindow'
import Blueprint from './components/views/Blueprint'
import Windows from './components/views/Windows.vue'
import MacOS from './components/views/MacOS.vue'
export default {
    name: 'App',
    data: function () {
        return {
            windows: this.$store.getters.getWindows,
            windowComponents: {}
        }
    },
    components: {
        Window,
        Navbar,
        AppGrid,
        Placeholder,
        Photos,
        OSWindow,
        Blueprint,
        Windows,
        MacOS
        // TopNavbar,
    },
    computed: {
        style() {
            return {
                '--fullscreen': this.$store.getters.getFullscreenWindowHeight
            };
        }
    },
    mounted() {
        /*-------------------------------------------------*\
            This fixes height problems for mobile devices 

            Code is detecting height of navbar and setting
            respective heights of screen
        \*-------------------------------------------------*/

        let navbar = document.getElementById('navbar')
        let topnavbar = document.getElementById('top-navbar')
        let topNavbarHeight = topnavbar.clientHeight
        let navbarHeight = navbar.clientHeight

        document.getElementById('screen').style.height = window.innerHeight - navbarHeight - topNavbarHeight + "px";

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        function resetHeight() {
            document.body.style.height = window.innerHeight + "px";
            document.html.style.height = window.innerHeight + "px";
        }
        window.addEventListener("resize", resetHeight);
        this.$store.commit('setFullscreenWindowHeight', window.innerHeight - navbarHeight - topNavbarHeight + "px");
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
            if (this.$store.getters.getWindowById(windowId).windowState == 'open') {
                return true
            }
        },
    },
}
</script>

<style>
/*---------------------------------------------------------------------------*\
    CSS Imports
    Change 'blueprint' to 'windows' or 'macos' to use windows or macos theme
\*---------------------------------------------------------------------------*/
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
