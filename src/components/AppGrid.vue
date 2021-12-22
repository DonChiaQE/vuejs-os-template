<template>
<nav class="grid-container">
    <li v-for="window in windows" :key="window.key" v-on:dblclick="openWindow(window.windowId)">
        <button class="icon">
            <img class="icon-image" :src="require('../assets/icons/' + window.iconImage)" :alt="window.altText" />
            <p class="icon-text">
                {{window.displayName}}
            </p>
        </button>
    </li>
</nav>
</template>

<style scoped>
.grid-container {
    height: calc(var(--vh, 1vh) * 100 - 60px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 0;
    margin-top: 10px;
}

.icon {
    color: black;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    text-align: center;
}

.icon-image {
    width: 50px;
    height: 50px;
}

.icon:focus .icon-image {
    filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(400%) contrast(0.9);
}

.icon:focus .icon-text {
    background: rgb(0, 0, 118);
    color: white;
}

.icon:focus .border {
    border: rgb(255, 255, 148) dotted 1px;
}

p {
    margin: 1vw 0 0 0;
    padding: 0 0 0 0;
}

li {
    list-style-type: none;
    padding: 0;
    margin: 0;
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
    name: 'AppGrid',
    data: function () {
        return {
            windows: this.$store.getters.getWindows
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
