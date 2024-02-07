<template>
    <view class="kiwi-load">
        <text :style="{color}"
              v-if="end">没有更多了</text>
        <loading type="point"
                 :color="color"
                 v-else></loading>
    </view>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-facing-decorator";
    import Loading from "./loading.vue";

    @Component({
        name: "KiwiLoad",
        components: {
            Loading
        }
    })
    export default class KiwiLoad extends Vue {
        /** 是否尾页 */
        @Prop({ type: Boolean, default: false })
        public end!: boolean;

        @Prop({ type: String, default: "#333" })
        public color!: string;
    }
</script>

<style lang="less" scoped>
    .kiwi-load {
        .align(center);
        flex-shrink: 0;
        width: 100%;
        height: 100px;
        > text {
            font-family: FangYuan, sans-serif;
            font-size: 26px;
        }
    }
</style>
