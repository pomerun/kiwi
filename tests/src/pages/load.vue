<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Load</kiwi-header>
        <div class="container">
            <kiwi-cell>
                <kiwi-cell-item v-for="(n,index) in list"
                                :key="index"
                                :title="'列表项 '+(index+1)"
                                next-icon></kiwi-cell-item>
            </kiwi-cell>
            <kiwi-load :end="list.length>=40"></kiwi-load>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Hook } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsLoad"
    })
    export default class PageComponentsLoad extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/load-doc"
                    });
                }
            }
        ];
        public list = new Array(20);

        @Hook
        onPullDownRefresh() {
            this.list = new Array(20);
            setTimeout(() => {
                uni.stopPullDownRefresh();
            }, 1000);
        }

        @Hook
        onReachBottom() {
            if(this.list.length < 40) {
                setTimeout(() => {
                    this.list = this.list.concat(new Array(20));
                }, 1000);
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        .button {
            .align(center);
            width: 100%;
            padding: 20px;
            > p {
                width: 100%;
                margin-top: 20px;
                line-height: 28px;
                text-align: center;
                font-size: 22px;
            }
        }
        > p {
            width: 100%;
            height: 20px;
        }
        > span {
            display: inline-block;
            width: 20px;
        }
        .icon-line {
            .align(v-center);
        }
    }
</style>
