<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Icon</kiwi-header>
        <div class="container">
            <kiwi-icon name="icon-kiwi-checked-circular" monochrome>单色图标</kiwi-icon>
            <p></p>
            <kiwi-icon name="icon-kiwi-checked-circular" color="pink" monochrome>自定义单色图标色值</kiwi-icon>
            <p></p>
            <div class="icon-line"><kiwi-icon name="icon-kiwi-checked-circular" color="pink" monochrome></kiwi-icon><em style="margin-left:.3rem">我不想改变文字的色值</em></div>
            <p></p>
            <kiwi-icon name="icon-kiwi-checked-circular" size="30px" monochrome>自定义图标大小</kiwi-icon>
            <p></p>
            <div class="icon-line"><kiwi-icon name="icon-kiwi-checked-circular" size="30px" monochrome></kiwi-icon><em style="margin-left:.3rem">我不想改变文字的大小</em></div>
            <p></p>
            <kiwi-icon name="icon-food-hotdog">多色图标</kiwi-icon>
            <p></p>
            <kiwi-icon name="icon-food-popsicle" size="30px">自定义多色图标大小</kiwi-icon>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsIcon"
    })
    export default class PageComponentsIcon extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/icon-doc"
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
        .icon-line {
            .align(v-center);
        }
    }
</style>
