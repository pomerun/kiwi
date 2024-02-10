<template>
    <div class="page">
        <kiwi-header :icon="headerIcon"
                     line>Popup</kiwi-header>
        <div class="container">
            <kiwi-button @click="visible=!visible" long>显示/隐藏 弹出层</kiwi-button>
            <p></p>
            <kiwi-button @click="boxTopVisible=!boxTopVisible" long>顶部弹出框</kiwi-button>
            <p></p>
            <kiwi-button @click="boxBottomVisible=!boxBottomVisible" long>底部弹出框</kiwi-button>
            <p></p>
            <kiwi-button @click="boxLeftVisible=!boxLeftVisible" long>左侧弹出框</kiwi-button>
            <p></p>
            <kiwi-button @click="boxRightVisible=!boxRightVisible" long>右侧弹出框</kiwi-button>
            <p></p>
            <kiwi-button @click="boxBackgroundVisible=!boxBackgroundVisible" long>自定义弹出层背景色</kiwi-button>
        </div>
        <kiwi-popup v-model="visible"></kiwi-popup>
        <kiwi-popup v-model="boxTopVisible">
            <div class="box-width popup-fade-in-bottom">顶部弹出框</div>
        </kiwi-popup>
        <kiwi-popup v-model="boxBottomVisible">
            <div class="box-width popup-fade-in-up">底部弹出框</div>
        </kiwi-popup>
        <kiwi-popup v-model="boxLeftVisible">
            <div class="box-height popup-fade-in-right">左侧弹出框</div>
        </kiwi-popup>
        <kiwi-popup v-model="boxRightVisible">
            <div class="box-height popup-fade-in-left">右侧弹出框</div>
        </kiwi-popup>
        <kiwi-popup v-model="boxBackgroundVisible" background="purple" center>
            <div class="box popup-fade">自定义弹出层背景色</div>
        </kiwi-popup>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsPopup"
    })
    export default class PageComponentsPopup extends Vue {
        public headerIcon = [
            {
                icon: "icon-kiwi-doc",
                active: () => {
                    uni.navigateTo({
                        url: "/pages/popup-doc"
                    });
                }
            }
        ];
        public visible = false;
        public boxTopVisible = false;
        public boxBottomVisible = false;
        public boxLeftVisible = false;
        public boxRightVisible = false;
        public boxBackgroundVisible = false;
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
    .box,
    .box-width,
    .box-height {
        .align(center);
        background-color: #fff;
        letter-spacing: 3px;
        font-size: 28px;
        color: #999;
    }
    .box-width {
        width: 100%;
        height: 500px;

    }
    .box-height {
        width: 350px;
        height: 100%;
    }
    .box {
        width: 550px;
        height: 400px;
    }
</style>
