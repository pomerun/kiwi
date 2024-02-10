<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Swipeout</kiwi-header>
        <div class="container">
            <div class="caption">配合单元格使用</div>
            <kiwi-cell>
                <kiwi-swipeout v-for="n in 3"
                               :key="n">
                    <template #left>
                        <span class="btn add" @touchend="add">添加</span>
                    </template>
                    <kiwi-cell-item title="标题"
                                    @click="active">内容</kiwi-cell-item>
                    <hr/>
                    <template #right>
                        <span class="btn info" @touchend="info">查看</span>
                        <span class="btn del" @touchend="del">删除</span>
                    </template>
                </kiwi-swipeout>
            </kiwi-cell>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsSwipeout"
    })
    export default class PageComponentsSwipeout extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/swipeout-doc"
                    });
                }
            }
        ];

        public add() {
            uni.showToast({
                icon: "none",
                title: "点击了添加"
            });
        }
        public info() {
            uni.showToast({
                icon: "none",
                title: "点击了查看"
            });
        }
        public del() {
            uni.showToast({
                icon: "none",
                title: "点击了删除"
            });
        }
        public active() {
            uni.showToast({
                icon: "none",
                title: "点击了列表项"
            });
        }
    }
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        padding: 20px 0;
        > p {
            width: 100%;
            height: 20px;
        }
        > span {
            display: inline-block;
            width: 20px;
        }
        /deep/ hr {
            width: 100%;
            height: 1PX;
            background-color: #eee;
        }
        .caption {
            .align(h-space-between);
            .align(v-center);
            width: 100%;
            padding: 0 20px;
            margin-bottom: 10px;
            font-size: 28px;
            color: #999;
        }
    }
    .btn {
        .align(center);
        width: 120px;
        height: 100%;
        font-size: 26px;
        color: #fff;
        &.add {
            background-color: #19be6b;
        }
        &.del {
            background-color: #ed4014;
        }
        &.info {
            background-color: #2db7f5;
        }
    }
</style>
