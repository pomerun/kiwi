<template>
    <div class="page flex scroll">
        <kiwi-header :icon="headerIcon"
                     @height="headerHeightChange"
                     line>Drag</kiwi-header>
        <div class="container">
            <p>按住<i class="icon-kiwi-home"></i>图标进行拖动，点击跳转至主页</p>
            <kiwi-drag :top="dragTop"
                       @click="toHome"
                       dock>
                <i class="icon-kiwi-home to-home"></i>
            </kiwi-drag>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsDrag"
    })
    export default class PageComponentsDrag extends Vue {
        public dragTop = 0;

        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/drag-doc"
                    });
                }
            }
        ];

        public toHome() {
            uni.reLaunch({
                url: "/pages/home"
            });
        }

        public headerHeightChange(header: number) {
            this.dragTop = header;
        }
    }
</script>

<style lang="less" scoped>
    .container {
        .align(center);
        flex: 1;
        width: 100%;
        height: 0;
        padding: 20px;
        > p {
            letter-spacing: 3px;
            line-height: 40px;
            text-align: center;
            font-size: 24px;
            color: #666;
        }
    }
    .to-home {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        font-weight: bold;
        font-size: 36px;
    }
</style>
