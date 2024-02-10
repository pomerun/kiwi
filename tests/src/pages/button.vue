<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Button</kiwi-header>
        <div class="container">
            <kiwi-button long>长按钮</kiwi-button>
            <p></p>
            <kiwi-button disabled long>按钮禁用</kiwi-button>
            <p></p>
            <kiwi-button async @click="asyncButtonHandler" long>等待回调按钮</kiwi-button>
            <p></p>
            <kiwi-button background="#ffd32d" long :loading="customButtonLoading" @click="customButtonHandler">自定义背景色</kiwi-button>
            <p></p>
            <kiwi-button>自适应长度按钮</kiwi-button>
            <span></span>
            <kiwi-button radius>圆角按钮</kiwi-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsButton"
    })
    export default class PageComponentsButton extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/button-doc"
                    });
                }
            }
        ];
        public customButtonLoading = false;

        public asyncButtonHandler(complete?: () => void) {
            setTimeout(() => {
                complete && complete();
            }, 3000);
        }

        public customButtonHandler() {
            this.customButtonLoading = true;
            setTimeout(() => {
                this.customButtonLoading = false;
            }, 3000);
        }
    }
</script>

<style lang="less" scoped>
    .container {
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
</style>
