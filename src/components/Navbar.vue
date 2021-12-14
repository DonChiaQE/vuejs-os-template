<template>
<div class="navbar-container">
    <div class="icon" :style="{'background-color':this.windowIcon}">
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
    methods: {
        changeIconColor(color) {
            this.windowIcon = color
        }
    },
    created: function () {
        this.$parent.$on('windowModify', this.changeIconColor);
    }
}
</script>
