<template>
<nav 
    class="grid-container"
    :style="{height: gridHeight}"
>
    <li v-for="window in windows" :key="window.key">
        <button class="icon" @touchstart="openWindow(window.windowId)" @dblclick="openWindow(window.windowId)">
            <img class="icon-image" :src="require('../assets/icons/' + window.iconImage)" :alt="window.altText" />
            <div class="border">
            <p class="icon-text">
                {{window.displayName}}
            </p>
            </div>
        </button>
    </li>
</nav>
</template>

<style scoped>
/*-------------------------------------------*\
    Grid 
\*-------------------------------------------*/

.grid-container {
    height: calc(var(--vh, 1vh) * 100 - 60px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 0;
    margin-top: 10px;
}
</style>

<script>
export default {
    name: 'AppGrid',
    data: function () {
        return {
            windows: this.$store.getters.getWindows,
            gridHeight: ''
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
    mounted() {
        this.gridHeight = this.$store.getters.getFullscreenWindowHeight;
    },
}
</script>
