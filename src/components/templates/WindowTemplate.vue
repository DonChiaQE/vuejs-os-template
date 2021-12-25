<template>
<interact draggable :dragOption="dragOption" resizable :resizeOption="resizeOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove" @click.native="setActiveWindow" :class="{ fullscreen: this.WindowFullscreen, minimize: $store.getters.getWindowById(ComponentName).windowState=='minimize'}">
    <button class="top-bar" id="top-bar" v-on:dblclick="toggleWindowSize">
        <slot name="title" class="window-name">
            <!-- slot for window title -->
        </slot>
        <div class="triple-button">
            <button class="expand_button button" @click="toggleWindowSize"></button>
            <button class="minimize_button button" @click="minimizeWindow"></button>
            <button class="close_button button" @click="closeWindow"></button>
        </div>
    </button>
    <div class="content">
        <slot name="content">
            <!-- slot for content -->
        </slot>
    </div>
</interact>
</template>

<style scoped>
.minimize_button {
    width: 12px;
    height: 12px;
    background-color: yellow;
    margin: 5px;
    border-radius: 50%;
}

.expand_button {
    width: 12px;
    height: 12px;
    background-color: green;
    margin: 5px;
    border-radius: 50%;
}

.close_button {
    width: 12px;
    height: 12px;
    background-color: red;
    margin: 5px;
    border-radius: 50%;
}

.button:hover {
    cursor: pointer;
}

button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    outline: inherit;
}

p {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}

.minimize {
    display: none;
}

.resize-drag {
    box-sizing: border-box;
    background: #70AFDE;
    border: solid #5B6DCD 1px;
    padding: 0px;
    margin: 0px;
    min-height: 50vh;
    min-width: 350px;
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    flex-flow: column;
    display: flex;
    border-radius: 8px;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.top-bar {
    display: flex;
    flex: 0 1 auto;
    width: auto;
    background: #4C9CFF;
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 8px 8px 0px 0px;
    padding: 4px;
}

.top-bar:hover {
    cursor: default;
}

.window-name {
    color: black;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 0 0 3px;
}

.triple-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    overflow: scroll;
    flex: 1 1 auto;
    overflow-x: hidden;
    padding-right: 15%;
    padding-left: 15%;
    padding-top: 5%;
    padding-bottom: 5%;
}
</style>

<script>
import interact from "interactjs";
export default {
    name: 'WindowTemplate', // VERY IMPORTANT TO NAME YOUR COMPONENT <--
    props: {
        windowID: {
            type: String,
            required: true
        },
    },
    data: function () {
        return {
            // name
            ComponentName: this.$options.name,

            // states
            WindowFullscreen: false, // false, true

            // InteractJS states and modifiers
            resizeOption: {
                edges: {
                    top: true,
                    left: true,
                    bottom: true,
                    right: true
                },
                margin: 8,
                modifiers: [
                    // interact.modifiers.restrictRect({
                    //     restriction: '#screen'
                    // })
                ],
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "#screen",
                        endOnly: true
                    })
                ],
                allowFrom: '.top-bar',
            },
            // values for interact.js transformation
            x: 0,
            y: 0,
            tempX: 0,
            tempY: 0,
            w: 400,
            h: 400,

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--fullscreen': window.innerHeight - 50 + "px"
            };
        }
    },
    methods: {
        // functions to interact with window state

        closeWindow() {
            const payload = {
                'windowState': 'close',
                'windowID': this.ComponentName
            }
            this.$store.commit('setWindowState', payload)
        },

        openWindow() {
            const payload = {
                'windowState': 'open',
                'windowID': this.ComponentName
            }
            this.$store.commit('setWindowState', payload)
        },

        minimizeWindow() {
            const payload = {
                'windowState': 'minimize',
                'windowID': this.ComponentName
            }
            this.$store.commit('setWindowState', payload)
        },

        toggleWindowSize() {
            if (this.WindowFullscreen == true) {
                this.WindowFullscreen = false
                this.x = this.tempX
                this.y = this.tempY

            } else if (this.WindowFullscreen == false) {
                this.WindowFullscreen = true
                const tempX = this.x
                const tempY = this.y
                this.tempX = tempX
                this.tempY = tempY
                this.x = 0
                this.y = 0
            }
        },

        setActiveWindow() {
            this.$store.commit('zIndexIncrement', this.ComponentName)
            this.$store.commit('setActiveWindow', this.ComponentName)
        },

        // drag events

        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.setActiveWindow()
        },

        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        }
    }
}
</script>
