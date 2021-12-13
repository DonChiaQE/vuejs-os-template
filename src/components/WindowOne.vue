/* eslint-disable */
<template>
    <!-- <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove" :class="{ fullscreen: $store.getters.isFullscreenBio}">
        <div class="window" id="container" :class="{ fullscreen: $store.getters.isFullscreenBio, close: !$store.getters.isShownBio}">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit('toggleFullscreenBio')" :class="$store.getters.activeWindow=='Bio' ? 'top-bar' : 'top-bar-deactivated'">
                <div style="color: white; margin-left: 3px; display: flex; align-items: center;"><img class="icon-image" src="../assets/win95Icons/bio.png"/>Biography</div>
                <div class="triple-button">
                    <div class="button-hide" v-on:click="minimizeBio"><span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;"></span></div>
                    <div class="button-expand" v-on:click="$store.commit('toggleFullscreenBio')"><span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid"></span></div>
                    <div style="margin-right: 3px; padding-left: 1px;" class="button-close" v-on:click="closeBio">×</div>
                </div>
            </div>
            <div class="content">
                <div class="scroll-container" :class="{ expandedScrollContainer: $store.getters.isFullscreenBio }">
                    <slot>

                    </slot>
                </div>
            </div>
        </div>
    </interact> -->
    <interact draggable="" :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove">
        <div class="window" id="container" >
        <div class="top-bar" id="top-bar">
            <div style="color: white; margin-left: 3px; display: flex; align-items: center;">Window</div>
            <div class="triple-button">
                    <!-- <div class="button-hide" v-on:click="minimizeBio"><span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;"></span></div>
                    <div class="button-expand" v-on:click="$store.commit('toggleFullscreenBio')"><span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid"></span></div>
                    <div style="margin-right: 3px; padding-left: 1px;" class="button-close" v-on:click="closeBio">×</div> -->
                <div class="square" @click="closeWindow" style="color: white;">X</div>
            </div>
            <div class="content">
                <slot>

                </slot>
            </div>
        </div>
        </div>
    </interact>
</template>

<style scoped>
.square {
    width: 20px;
    height: 20px;
    background-color: blue;
}

.resize-drag {
    box-sizing: border-box;
    background: none;
    user-select: auto;
    -ms-touch-action: auto;
    touch-action: auto;
    min-height: 40px;
    min-width: 350px;
    position: sticky;
    cursor: auto !important;
}

.window {
    min-height: 500px;
    min-width: 350px;
    height: 500px;
    width: 600px;
    background: rgb(70, 70, 70);
    overflow: hidden;
    max-height: 100%;
    max-width: 100%;
    align-items: flex-end;
}

.self {
    width: 100%;
    height: auto;
    /* border-radius: 5px; */
}

@media only screen and (max-width: 600px) {
    .window {
        min-width: 50vw;
        width: 90vw;
        max-width: 100vw;
    }
    .scroll-container {
        padding-left: 10vw !important;
        padding-right: 10vw !important;
    }
    .expandedScrollContainer {
        padding-left: 10vw !important;
        padding-right: 10vw !important;
    }
}

.button-expand, .button-close, .button-hide {
    background: rgb(195, 195, 195);
    border-top: solid rgb(250, 250, 250) 1px;
    border-left: solid rgb(250, 250, 250) 1px;
    border-right: solid rgb(90, 90, 90) 1px;
    border-bottom: solid rgb(90, 90, 90) 1px;
    box-shadow: 1px 1px black;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-left: 2px;
}

.button-close:hover, .button-expand:hover, .button-hide:hover {
    cursor: pointer;
}

.button-close:active, .button-expand:active, .button-hide:active {
    border-radius: 0px;
background: rgb(192, 192, 192);
            box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.close {
    display: none;
}

.show {
    display: block;
}

.top-bar {
    display: flex;
    height: 25px;
    width: auto;
    background: black;
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 2px;
}

.triple-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
}
</style>

<script>
import interact from "interactjs";
export default {
    name: "WindowOne", // VERY IMPORTANT TO NAME YOUR COMPONENT <--
    data: function() {
        return {
            // name
            ComponentName: this.$options.name,

            // states
            WindowFullscreen: false, // false, true

            resizeOption: {
                edges: { top: true, left: true, bottom: true, right: true },

            },
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "parent",
                        endOnly: true
                    })
                ],
                allowFrom: '.top-bar',
            },

            // values for interact.js transformation
            x: 0,
            y: 0,

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--fullscreen': window.innerHeight - 40 + "px"
            };
        }
    },
    methods: {
        // functions to interact with window state

        closeWindow() {
            console.log('close')
            const payload = {'windowState': 'close', 'windowID': this.ComponentName}
            this.$store.commit('setWindowState', payload)
        },

        openWindow(e) {
            e.stopPropagation();
            let payload = {'windowState': 'open', 'windowID': this.ComponentName}
            this.$store.commit('set'+this.ComponentName, payload)
        },

        minimizeWindow(e) {
            e.stopPropagation();
            this.$store.commit('set'+this.ComponentName, 'minimize', this.ComponentName)
        },

        // drag events

        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', this.ComponentName) // this is important
        }, 
        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        },
        dragMouseDown: function(event) {
            event.preventDefault()
            // get the mouse cursor position at startup:
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            document.onmousemove = this.elementDrag
            document.onmouseup = this.closeDragElement
        },
        elementDrag: function(event) {
            event.preventDefault()
            this.positions.movementX = this.positions.clientX - event.clientX
            this.positions.movementY = this.positions.clientY - event.clientY
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            // set the element's new position:
            this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
            this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        },
        closeDragElement() {
            document.onmouseup = null
            document.onmousemove = null
        },
    },
    mounted: function() {
        // Query the element
        const ele = document.getElementById('container');

        // The current position of mouse
        let x = 0;
        let y = 0;

        // The dimension of the element
        let w = 0;
        let h = 0;

        const mouseDownHandlerRight = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerRight);
            document.addEventListener('mouseup', mouseUpHandlerRight);
        }

        const mouseDownHandlerLeft = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerLeft);
            document.addEventListener('mouseup', mouseUpHandlerLeft);
        }

        const mouseDownHandlerUp = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerUp);
            document.addEventListener('mouseup', mouseUpHandlerUp);
        }

        const mouseDownHandlerDown = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerDown);
            document.addEventListener('mouseup', mouseUpHandlerDown);
        }

        const mouseMoveHandlerUp = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h - dy}px`;
        };

        const mouseMoveHandlerDown = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h + dy}px`;
        };

        const mouseMoveHandlerRight = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w + dx}px`;
        };

        const mouseMoveHandlerLeft = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w - dx}px`;
        };

        const mouseUpHandlerUp = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerUp);
            document.removeEventListener('mouseup', mouseUpHandlerUp);
        };

        const mouseUpHandlerDown = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerDown);
            document.removeEventListener('mouseup', mouseUpHandlerDown);
        };

        const mouseUpHandlerRight = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerRight);
            document.removeEventListener('mouseup', mouseUpHandlerRight);
        };

        const mouseUpHandlerLeft = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerLeft);
            document.removeEventListener('mouseup', mouseUpHandlerLeft);
        };
        // Query all resizers
        const resizersRight = ele.querySelectorAll('.resizer-r');
        const resizersUp = ele.querySelectorAll('.resizer-t');
        const resizersDown = ele.querySelectorAll('.resizer-b');
        const resizersLeft = ele.querySelectorAll('.resizer-l');

        [].forEach.call(resizersRight, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerRight);
        });

        [].forEach.call(resizersUp, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerUp);
        });

        [].forEach.call(resizersDown, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerDown);
        });

        [].forEach.call(resizersLeft, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerLeft);
        });
    }
}
</script>