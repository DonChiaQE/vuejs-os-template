<template>
<interact draggable :dragOption="dragOption" resizable :resizeOption="resizeOption" class="window window-style" :style="style" @dragmove="dragmove" @resizemove="resizemove" @click.native="setActiveWindow" :class="{ fullscreen: $store.getters.getWindowFullscreen(this.ComponentName), minimize: $store.getters.getWindowById(ComponentName).windowState=='minimize'}">
    <div class="top-bar" id="top-bar" @dblclick="toggleWindowSize">
        <h3 class="window-name">{{this.window.displayName}}</h3>
        <div class="triple-button">
            <button class="expand-button button" @click="toggleWindowSize"></button>
            <button class="minimize-button button" @click="minimizeWindow"></button>
            <button class="close-button button" @click="closeWindow"></button>
        </div>
    </div>
    <div class="content">
        <p>
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
        </p>
    </div>
</interact>
</template>

<style scoped>
/*-------------------------------------------*\
    Windows/Display
\*-------------------------------------------*/

.minimize {
    display: none;
}

.window {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    min-height: 50vh;
    min-width: 350px;
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    flex-flow: column;
    display: flex;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
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
    name: "WindowTwo", // VERY IMPORTANT TO NAME YOUR COMPONENT <--
    data: function () {
        return {
            // ID Name of window (important)
            ComponentName: this.$options.name,

            // window
            Window: {},

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
                '--fullscreen': this.$store.getters.getFullscreenWindowHeight
            };
        }
    },
    created() {
        this.window = this.$store.getters.getWindowById(this.ComponentName)
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
            if (this.$store.getters.getWindowFullscreen(this.ComponentName) == true) {
                const payload = {
                    'fullscreen': false,
                    'windowID': this.ComponentName
                }
                this.$store.commit('setFullscreen', payload)
                this.x = this.tempX
                this.y = this.tempY

            } else if (this.$store.getters.getWindowFullscreen(this.ComponentName) == false) {
                const payload = {
                    'fullscreen': true,
                    'windowID': this.ComponentName
                }
                this.$store.commit('setFullscreen', payload)
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
