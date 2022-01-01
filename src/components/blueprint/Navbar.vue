<template>
<nav class="navbar-container">
    <div 
        v-for="window in this.activeWindows" 
        :key="window.key"
    >
        <button 
            v-if="window.windowState=='open'" 
            @click="openWindow(window.windowId)" 
            class="navbar-item open"
        >
        {{window.displayName}}
        </button>
        <button 
            v-if="window.windowState=='minimize'" 
            @click="openWindow(window.windowId)" 
            class="navbar-item minimize"
        >
        {{window.displayName}}
        </button>
        <button 
            v-if="window.windowState=='close'" 
            @click="openWindow(window.windowId)" 
            class="navbar-item close"
        >
        {{window.displayName}}
        </button>
    </div>
    <div class="spacer"></div>
    <p class="label">{{this.time}}</p>
</nav>
</template>

<style scoped>
/*-------------------------------------------*\
    Container
\*-------------------------------------------*/

.navbar-container {
    width: 100%;
    height: 50px;
    background-color: rgb(0, 115, 255, 0.5);
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
}

/*-------------------------------------------*\
    Icons
\*-------------------------------------------*/

.navbar-item {
    color: white;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    width: auto;
    height: 50px;
    text-align: center;
}

.navbar-item:hover {
    cursor: pointer;
}

.open {
    background: rgb(0, 115, 255, 1);
}

.minimize {
    background: rgb(0, 115, 255, 0.6);
}

.close {
    display: none;
}

/*-------------------------------------------*\
    Utilities
\*-------------------------------------------*/

.spacer {
    flex-grow: 1;
}

.label {
    font-weight: bold;
    color: white;
    text-align: center;
    padding-right: 20px;
}

/*-------------------------------------------*\
    CSS Normalisation 
\*-------------------------------------------*/

button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    outline: inherit;
}
</style>

<script>
import moment from 'moment'
export default {
    name: 'Navbar',
    data: function() {
        return {
            activeWindows: this.$store.getters.getActiveWindows,
            time: '',
            date: ''
        }
    },
    beforeMount() {
        setInterval(() => {
            this.time = moment().format('hh:mm A')
        }, 1000)
        setInterval(() => {
            this.date = moment().format('ddd DD MMMM')
        }, 1000)
    },
    methods: {
        openWindow(windowId) {
            const payload = {
                'windowState': 'open',
                'windowID': windowId
            }
            this.$store.commit('setWindowState', payload)
        },      
    }
}
</script>
