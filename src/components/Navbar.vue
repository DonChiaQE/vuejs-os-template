<template>
    <div class="navbar-container">
        <div class="icon" @windowModify="changeIconColor" :style="{'background-color':this.windowIcon}">
        </div>
    </div>
</template>

<style scoped>
.navbar-container {
    width: 100%;
    height: 40px;
    background-color: #fff;
    z-index: 100;
}

.icon {
    width: 50px;
    height: 50px;
    background-color: green;
}
</style>

<script>
export default {
    data() {
        return {
            windowIcon: 'red' // States: ['red', 'yellow', 'green']
        }
    },
    methods: {
        changeIconColor(color) {
            this.windowIcon = color
        }
    },
    created: function() {
        this.$parent.$on('windowModify', this.changeIconColor);
    }
}
</script>