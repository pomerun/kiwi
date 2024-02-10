<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Loading</kiwi-header>
        <div class="container">
            <div class="caption">行内加载状态图标</div>
            <kiwi-loading></kiwi-loading>
            <p></p>
            <div class="caption">另一种风格的加载状态图标</div>
            <kiwi-loading type="point"></kiwi-loading>
            <p></p>
            <div class="caption">调整加载状态图标大小</div>
            <kiwi-loading size="small"></kiwi-loading>
            <span></span>
            <kiwi-loading size="default"></kiwi-loading>
            <span></span>
            <kiwi-loading size="large"></kiwi-loading>
            <p></p>
            <div class="caption">改变加载状态图标颜色</div>
            <kiwi-loading color="red"></kiwi-loading>
            <span></span>
            <kiwi-loading type="point" color="blue"></kiwi-loading>
            <p></p>
            <div class="caption">区域加载状态<button @click="loading=!loading">切换</button></div>
            <div class="box">
                <kiwi-loading v-if="loading" background="#fff" fix></kiwi-loading>
                蓝蓝的天空银河里，有只小白船
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsLoading"
    })
    export default class PageComponentsLoading extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/loading-doc"
                    });
                }
            }
        ];
        public loading = true;
    }
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        padding: 20px;
        > p {
            width: 100%;
            height: 20px;
        }
        > span {
            display: inline-block;
            width: 20px;
        }
        > hr {
            width: 100%;
            height: 1px;
            border-bottom: 1PX dashed #aaa;
        }
    }
    .caption {
        .align(h-space-between);
        .align(v-center);
        width: 100%;
        margin-bottom: 10px;
        font-size: 28px;
        color: #999;
        > button {
            .align(v-center);
            height: 40px;
            padding: 0 20px;
            border-radius: 8px;
            background-color: #fff;
            font-size: 24px;
            color: #999;
        }
    }
    .box {
        .align(center);
        position: relative;
        width: 100%;
        height: 260px;
        padding: 20px;
        overflow: hidden;
        border-radius: 10px;
        font-size: 28px;
        background-color: #fff;
    }
</style>
