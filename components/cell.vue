<template>
    <view class="kiwi-cell"
          :class="{radius}">
        <slot></slot>
    </view>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-facing-decorator";

    @Component({
        name: "KiwiCell"
    })
    export default class KiwiCell extends Vue {
        /* 圆角边框 */
        @Prop({ type: Boolean })
        public radius?: boolean;

        /* 固定列表标题宽度 */
        @Prop({ default: "auto" })
        public titleFixed!: string;

        /* 列表文本内容区域是否右对齐 */
        @Prop({ type: Boolean })
        public textRight?: boolean;

        @Prop({ default: "PingFang SC, Microsoft YaHei, iconfont, sans-serif" })
        public font!: string;

        @Prop({ default: "" })
        public activeId!: string;
    }
</script>

<style lang="less" scoped>
    .kiwi-cell {
        width: 100%;
        padding: 0 20px;
        background-color: #fff;
        &.radius {
            border-radius: 20px;
            overflow: hidden;
        }
    }
</style>
