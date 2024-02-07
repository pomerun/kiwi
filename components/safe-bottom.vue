<template>
    <view class="kiwi-safe-bottom"
          :style="{height:(deviceInfo.safeAreaInsets?.bottom||0)+'px',background}"></view>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-facing-decorator";


    @Component({
        name: "KiwiSafeBottom"
    })
    export default class KiwiSafeBottom extends Vue {
        /** 背景色 */
        @Prop({ type: String, default: "transparent" })
        public background!: string;

        private deviceInfo = uni.getSystemInfoSync();
    }
</script>

<style lang="less" scoped>
    .kiwi-safe-bottom {
        width: 100vw;
    }
</style>
