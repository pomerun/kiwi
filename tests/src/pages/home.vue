<template>
    <div class="page">
        <kiwi-header :back="false"
                     :icon="headerIcon"
                     spacing
                     line><kiwi-icon name="icon-kiwi-logo" size="40rpx">Kiwi</kiwi-icon></kiwi-header>
        <kiwi-cell>
            <kiwi-cell-item v-for="(component,index) in componentsList"
                            :key="index"
                            :title="stringCapitalize(component)"
                            :next="`/pages/${component}`"></kiwi-cell-item>
        </kiwi-cell>
        <p class="copyright">
            <span>适用于 uni-app 的通用组件库</span>
            <em>Kiwi - 几维</em>
        </p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    import { stringCapitalize } from "@pecasha/util";

    @Component({
        name: "PageHome"
    })
    export default class PageHome extends Vue {
        stringCapitalize = stringCapitalize;

        public headerIcon = [
            {
                icon: "icon-kiwi-code",
                active: () => {
                    window.open("https://github.com/pecasha/kiwi", "_blank");
                }
            }
        ];

        public componentsList = [
            "button",
            "cell",
            "icon",
            "popup",
            "loading",
            "load",
            "swipeout",
            "rate",
            "drag"
        ].sort();
    }
</script>

<style lang="less" scoped>
    .copyright {
        .align(center);
        width: 100%;
        height: 90px;
        line-height: 1;
        text-align: center;
        font-size: 22px;
        color: #999;
        > span {
            padding-right: 30px;
        }
        > em {
            position: relative;
            padding-left: 30px;
            line-height: 34px;
            &::before {
                .absolute(m);
                left: 0;
                content: "";
                width: 1PX;
                height: 22px;
                background-color: #aaa;
            }
        }
    }
</style>
