<template>
<div class="navbar-container">
    <!-- <div class="icon" :style="{'background-color':this.windowIcon}"></div> -->
    <div v-for="window in windows" :key="window.key">
        <div v-if="window.windowState=='open'" v-on:click="openWindow(window.windowId)" :style="{background : 'green'}" style="z-index: 1000; color: white;" class="square">{{window.displayName}}</div>
        <div v-if="window.windowState=='minimize'" v-on:click="openWindow(window.windowId)" :style="{background : 'yellow'}" style="z-index: 1000; color: white;" class="square">{{window.displayName}}</div>
        <div v-if="window.windowState=='close'" v-on:click="openWindow(window.windowId)" :style="{background : 'red'}" style="z-index: 1000; color: white;" class="square">{{window.displayName}}</div>
    </div>
    <div class="spacer"></div>
    <div class="label">Active Window: {{$store.getters.getActiveWindow}}</div>
</div>
</template>

<style scoped>
.navbar-container {
    width: 100%;
    height: 50px;
    background-color: #BEDBFE;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #2F8CFF;
}

.spacer {
    flex-grow: 1;
}

.label {
    font-weight: bold;
    color: #000;
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

    },
    created: function () {
        this.$parent.$on('windowModify', this.changeIconColor);
    },
    mounted () {
        
    }
}
</script>
