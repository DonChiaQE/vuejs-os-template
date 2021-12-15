<template>
<interact draggable :dragOption="dragOption" resizable :resizeOption="resizeOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove" @click.native="setActiveWindow" :class="{ fullscreen: this.WindowFullscreen, minimize: $store.getters.getWindowById(ComponentName).windowState=='minimize'}">
    <div class="top-bar" id="top-bar" v-on:dblclick="toggleWindowSize">
        <div style="color: black; margin-left: 3px; display: flex; align-items: center;">Window One</div>
        <div class="triple-button">
            <div class="expand_button button" @click="toggleWindowSize"></div>
            <div class="minimize_button button" @click="minimizeWindow"></div>
            <div class="close_button button" @click="closeWindow"></div>

        </div>
    </div>
    <div class="content">
        <slot>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut leo rutrum, pulvinar dui eu, tristique ante. Suspendisse ultrices fringilla risus, et tempus tortor varius ac. Donec at mauris vitae purus viverra malesuada. Nam scelerisque eu nunc quis pretium. Aliquam ac arcu dictum, interdum nunc non, porttitor ligula. Donec porta risus id mollis vulputate. Integer rhoncus arcu metus, vel ultrices dolor fermentum ac. Donec est erat, pulvinar a urna vel, varius euismod sapien. Sed convallis at nunc rhoncus imperdiet. Fusce vitae eleifend lorem, eu feugiat mauris. Donec quis magna risus.

            Nulla nisi diam, pellentesque accumsan dolor et, imperdiet egestas sapien. Maecenas vitae mollis mi. Morbi ornare mi magna, vel molestie ipsum imperdiet a. Fusce vestibulum ligula eu purus egestas dictum. Morbi finibus, nisl tincidunt cursus aliquet, diam dui fermentum mauris, non aliquam diam urna viverra erat. Phasellus ut felis convallis, imperdiet ipsum sed, interdum nisl. Suspendisse enim nisi, ullamcorper eu dolor ut, pellentesque accumsan leo. Duis quis cursus libero. Proin sit amet efficitur tellus. Vivamus efficitur felis nec sodales accumsan. Fusce at volutpat leo.

            Vivamus et lacinia augue, ac porta est. Nunc scelerisque sagittis velit non gravida. Phasellus tempor nibh a imperdiet semper. Ut interdum, justo non feugiat cursus, mi est faucibus eros, et cursus nisl erat sit amet nibh. Nunc venenatis varius semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in nibh nisl. Pellentesque velit lacus, porta sed pretium in, accumsan eu eros. Curabitur nec mollis velit, quis pulvinar tortor. Mauris elementum justo mi, ultricies hendrerit tortor convallis at.

            Integer in varius metus, sit amet egestas ex. In nec aliquet nulla. Nam justo risus, blandit eget lorem sit amet, vulputate suscipit elit. Donec suscipit tempor tellus at porttitor. Etiam ligula nulla, varius sed consequat non, rutrum et quam. Suspendisse maximus odio arcu, ut commodo lectus luctus non. In malesuada lobortis sem, non interdum tortor vestibulum sed. Sed sollicitudin sagittis ornare.

            Proin blandit, nisl id iaculis hendrerit, tortor est ullamcorper nibh, vitae commodo arcu urna vitae sapien. Mauris non lectus congue magna interdum euismod ut non ante. Vestibulum consectetur, nibh in iaculis tristique, sapien ante semper arcu, a interdum risus massa vel ante. Aliquam erat volutpat. Cras molestie lectus nec quam facilisis scelerisque. Sed laoreet lectus a dolor iaculis, vel tempor ante molestie. Nam fermentum ut ante non posuere. Nullam a eleifend lorem. Sed odio leo, venenatis sit amet consequat sed, hendrerit in neque.

            Nunc dictum erat nec ligula volutpat molestie. Sed sollicitudin molestie felis in dapibus. Suspendisse scelerisque felis placerat felis porttitor venenatis. Nunc id tellus venenatis, luctus urna eget, finibus est. Sed ultrices diam sit amet feugiat cursus. Morbi sit amet risus et elit sagittis gravida. Integer sit amet ornare lorem. Mauris nec felis at lectus tempus fringilla sit amet eu nibh.

            Cras condimentum mollis tempus. Donec semper, justo non faucibus mollis, enim diam ornare magna, et consequat dui odio sed orci. Maecenas iaculis, metus et suscipit gravida, purus turpis tincidunt magna, vitae vulputate ante metus vel lacus. Nullam sit amet mauris mollis nisl dapibus commodo. Nullam blandit urna nec purus imperdiet feugiat. Praesent et interdum urna, sed semper ex. Nulla et tristique enim. Cras vel sagittis tellus. Nullam tincidunt eros hendrerit nisl bibendum, at congue odio feugiat. Nullam consectetur ac diam maximus fringilla. Integer dictum, ante eget mattis euismod, diam nisl faucibus mi, in condimentum erat tortor mollis lorem.

            Aliquam fringilla faucibus felis ac commodo. Duis sit amet scelerisque lorem, in sollicitudin ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla elit diam, dignissim vitae velit vitae, dignissim iaculis nibh. Sed ultrices vestibulum eros, non euismod augue. In hac habitasse platea dictumst. Cras volutpat risus et tincidunt venenatis. In hac habitasse platea dictumst. Donec vitae cursus orci. Proin sagittis ante in ipsum malesuada viverra. Nam vehicula eros ac turpis auctor, non egestas sapien scelerisque. In et nulla nec orci cursus molestie ullamcorper ac diam.

            Etiam eget nunc pretium, rutrum enim at, ultricies metus. Integer sagittis lorem nec malesuada sagittis. Vivamus congue feugiat vestibulum. Quisque congue viverra augue at ornare. Sed porttitor, tortor in finibus tempus, massa ipsum finibus diam, eu condimentum metus urna in magna. Proin porta varius nisi, sit amet porttitor nulla malesuada eget. Quisque pretium est luctus lectus porttitor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec neque ut augue commodo porta.

            Nunc efficitur, ante vitae posuere condimentum, mi dui hendrerit enim, quis imperdiet tellus odio eu tortor. Nunc mattis blandit diam, eget pretium erat. Aenean eu commodo dui, sit amet blandit ante. Aliquam luctus elementum sapien, vitae condimentum est posuere a. Cras at euismod quam, non blandit tellus. Ut pellentesque lacus maximus augue mollis, eget dapibus erat ultrices. Vivamus ac convallis odio. Sed hendrerit pulvinar sem vel sagittis. Nulla facilisi. Ut porttitor lacus sed leo iaculis, eu aliquam neque aliquet. In hac habitasse platea dictumst. Etiam vehicula at augue a aliquam. Aliquam purus velit, dapibus fermentum congue id, tincidunt quis dolor. Maecenas id sodales massa, ut luctus nibh. Suspendisse ultricies in erat non gravida. Mauris sed turpis a enim ultricies blandit.
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

.triple-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    flex: 1 1 auto;
    overflow: scroll;
    padding-right: 15%;
    padding-left: 15%;
    padding-top: 5%;
    padding-bottom: 5%;
}
</style>

<script>
import interact from "interactjs";
export default {
    name: "WindowOne", // VERY IMPORTANT TO NAME YOUR COMPONENT <--
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
                margin: 5,
                modifiers: [
                    // interact.modifiers.restrictRect({
                    //     restriction: "parent",
                    //     endOnly: true
                    // })
                ],
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
                '--fullscreen': window.innerHeight - 40 + "px"
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
            this.WindowFullscreen = !this.WindowFullscreen
            this.x = 0
            this.y = 0
        },

        setActiveWindow() {
            console.log("set")
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
