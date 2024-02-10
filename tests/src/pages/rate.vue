<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Rate</kiwi-header>
        <div class="container">
            <div class="caption">常规显示</div>
            <kiwi-rate :progress="70"></kiwi-rate>
            <p></p>
            <div class="caption">灰度显示</div>
            <kiwi-rate :progress="70" disabled></kiwi-rate>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsRate"
    })
    export default class PageComponentsRate extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/rate-doc"
                    });
                }
            }
        ];
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
    }
    .caption {
        .align(h-space-between);
        .align(v-center);
        width: 100%;
        margin-bottom: 10px;
        font-size: 28px;
        color: #999;
    }
</style>
