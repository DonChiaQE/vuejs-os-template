<template>
<nav class="navbar-container">
    <div 
        v-for="window in this.activeWindows" 
        :key="window.key"
    >
        <button 
            v-if="window.windowState=='open'" 
            v-on:click="openWindow(window.windowId)" 
            class="icon open"
        >
        {{window.displayName}}
        </button>
        <button 
            v-if="window.windowState=='minimize'" 
            v-on:click="openWindow(window.windowId)" 
            class="icon minimize"
        >
        {{window.displayName}}
        </button>
        <button 
            v-if="window.windowState=='close'" 
            v-on:click="openWindow(window.windowId)" 
            class="icon close"
        >
        {{window.displayName}}
        </button>
    </div>
    <div class="spacer"></div>
    <p class="label">Active Window: {{$store.getters.getActiveWindow}}</p>
</nav>
</template>

<style scoped>
.navbar-container {
    width: 100%;
    height: 50px;
    background-color: #0073ff;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon {
    color: white;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    width: auto;
    height: 50px;
    text-align: center;
}

.icon:hover {
    cursor: pointer;
}

.open {
    background: green;
}

.minimize {
    background: yellow;
}

.close {
    /* visibility: hidden; */
    /* secondary objective: make use of array and push active windows on it */
    display: none;
}

.spacer {
    flex-grow: 1;
}

.label {
    font-weight: bold;
    color: white;
    text-align: center;
    padding-right: 10px;
}

button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    outline: inherit;
}
</style>

<script>
export default {
    name: 'Navbar',
    data: function() {
        return {
            activeWindows: this.$store.getters.getActiveWindows,
        }
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
