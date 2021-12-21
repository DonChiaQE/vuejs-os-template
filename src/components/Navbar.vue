<template>
<div class="navbar-container">
    <div v-for="window in windows" :key="window.key">
        <div v-if="window.windowState=='open'" v-on:click="openWindow(window.windowId)" class="icon open">{{window.displayName}}</div>
        <div v-if="window.windowState=='minimize'" v-on:click="openWindow(window.windowId)" class="icon minimize">{{window.displayName}}</div>
        <div v-if="window.windowState=='close'" v-on:click="openWindow(window.windowId)" style="display: none;" class="icon">{{window.displayName}}</div>
    </div>
    <div class="spacer"></div>
    <p class="label">Active Window: {{$store.getters.getActiveWindow}}</p>
</div>
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
}

.open {
    background: green;
}

.minimize {
    background: yellow;
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
</style>

<script>
export default {
    name: 'Navbar',
    data: function() {
        return {
            windows: this.$store.getters.getWindows,
            iconColor: 'red'
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
    },
    created: function () {
        this.$parent.$on('windowModify', this.changeIconColor);
    }
}
</script>
