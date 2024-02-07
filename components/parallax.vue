<template>
    <view class="kiwi-parallax"
          :style="{width,height}">
        <view class="bg"
              :style="{background,transform:`translate(${-offsetX}px,${-offsetY}px)`}"></view>
        <slot></slot>
    </view>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-facing-decorator";

    import { selectorCalc } from "@pomerun/uniapp-helpers";

    @Component({
        name: "KiwiParallax"
    })
    export default class KiwiParallax extends Vue {
        /** 宽度 */
        @Prop({ type: String, default: "100%" })
        public width!: string;

        /** 高度 */
        @Prop({ type: String, default: "100%" })
        public height!: string;

        /** 背景 */
        @Prop({ type: String, required: true })
        public background!: string;

        /** 最大偏移量 */
        @Prop({ type: Number, default: 30 })
        public offset!: number;

        /** 最大倾角 */
        @Prop({ type: Number, default: 15 })
        public tilt!: number;

        public offsetX = 0;
        public offsetY = 0;
        public maxOffsetX = 0;
        public maxOffsetY = 0;
        public initialized = false;
        public initialX = 0;
        public initialY = 0;

        async mounted() {
            await this.$nextTick();
            await uni.startGyroscope({
                interval: "ui"
            });
            this.init();
        }

        destroy() {
            uni.stopGyroscope();
        }

        async init() {
            const size = await selectorCalc(".kiwi-parallax", {
                size: true
            }, this);
            const width = size.width || 0;
            const height = size.height || 0;
            const diff = Math.abs(width - height);
            const smaller = Math.min(width, height);
            if (width > height) {
                this.maxOffsetX = this.offset + (diff / smaller) * this.offset;
                this.maxOffsetY = this.offset;
            } else {
                this.maxOffsetX = this.offset;
                this.maxOffsetY = this.offset + (diff / smaller) * this.offset;
            }

            uni.onGyroscopeChange(({x, y, z}) => {
                if(this.initialized) {
                    const relativeX = x - this.initialX;
                    const relativeY = y - this.initialY;
                    this.offsetX = Math.max(Math.min((relativeY / this.tilt) * this.maxOffsetX, this.maxOffsetX), -this.maxOffsetX);
                    this.offsetY = Math.max(Math.min((relativeX / this.tilt) * this.maxOffsetY, this.maxOffsetY), -this.maxOffsetY);
                } else {
                    this.initialX = x;
                    this.initialY = y;
                    this.initialized = true;
                }
            });
        }
    }
</script>

<style lang="less" scoped>
    .kiwi-parallax {
        .align(center);
        position: relative;
        .bg {
            position: absolute;
            top: -10%;
            left: -10%;
            width: 120%;
            height: 120%;
            transition: transform 100ms ease-out;
        }
    }
</style>
