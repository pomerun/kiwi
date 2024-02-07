<template>
    <view class="kiwi-cell-item"
          :class="{spacing,'not-line':notSplitLine,arrow:next||nextIcon,active}"
          :style="{background}"
          @tap="trigger">
        <view class="wrapper"
              v-if="icon||title||$slots.title||$slots.prefix">
            <slot name="prefix"
                  v-if="$slots.prefix"></slot>
            <view :class="['icon',icon,iconClass]"
                  :style="{color:iconColor}"
                  v-else-if="icon"></view>
            <text class="title"
                  :class="{important,fixed:_titleFixed!=='auto'}"
                  :style="{fontFamily:_font,color,width:_titleFixed}"
                  v-if="title||$slots.title"><slot name="title" v-if="$slots.title"></slot><template v-else>{{title}}</template></text>
            <slot name="titleSuffix"
                  v-if="$slots.titleSuffix"></slot>
        </view>
<!--        <slot name="custom"></slot>-->
        <view class="content"
              :class="{flex:textFlex,right:_textRight}"
              :style="{color:textColor}"><slot></slot></view>
    </view>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-facing-decorator";

    import type KiwiCell from "./cell.vue";

    @Component({
        name: "KiwiCellItem",
        emits: ["click"]
    })
    export default class KiwiCellItem extends Vue {
        /* 是否显示右边icon，默认false */
        @Prop({ type: Boolean })
        public nextIcon?: boolean;

        /* 在点击时触发路由跳转，并且会默认显示nextIcon */
        @Prop()
        public next?: string;

        /* 列表图标 */
        @Prop({ default: "" })
        public icon!: string;

        /* 列表图标颜色 */
        @Prop({ default: "" })
        public iconColor!: string;

        /* 列表图标className */
        @Prop({ default: "" })
        public iconClass!: string;

        /* 列表标题 */
        @Prop({ default: "" })
        public title!: string;

        /* 列表标题文字颜色 */
        @Prop({ default: "#333" })
        public color!: string;

        /* 列表文本内容文字颜色 */
        @Prop({ default: "#333" })
        public textColor!: string;

        /* 是否在底部增加20px的margin间距 */
        @Prop({ type: Boolean })
        public spacing?: boolean;

        /* 是否显示分割线 */
        @Prop({ type: Boolean })
        public notSplitLine?: boolean;

        /* 列表自定义背景 */
        @Prop({ default: "#fff" })
        public background!: string;

        /* 是否在标题前加星号标识 */
        @Prop()
        public important?: boolean;

        /* 固定列表标题宽度 */
        @Prop({ default: "auto" })
        public titleFixed!: string;

        /* 列表文本内容区域是否使用flex布局 */
        @Prop({ type: Boolean })
        public textFlex?: boolean;

        /* 列表文本内容区域是否右对齐 */
        @Prop({ type: Boolean, default: false })
        public textRight!: boolean;

        /** 自定义字体 */
        @Prop({ default: "PingFang SC, Microsoft YaHei, iconfont, sans-serif" })
        public font!: string;

        /** 自定义的组件ID */
        @Prop({ type: String })
        public id?: string;

        public _titleFixed = this.titleFixed;
        public _textRight = this.textRight;
        public _font = this.font;
        public active = false;

        private activeTimer = 0;

        async created() {
            const $parent = this.$parent as KiwiCell;
            this._titleFixed = $parent.titleFixed || this.titleFixed;
            this._textRight = $parent.textRight || this.textRight;
            this._font = $parent.font || this.font;
        }

        @Watch("$parent.activeId")
        private async activeChanged(val: string) {
            if(val === this.id) {
                clearTimeout(this.activeTimer);
                this.active = false;
                await this.$nextTick();
                this.active = true;
                this.activeTimer = setTimeout(() => {
                    this.active = false;
                }, 4250);
            } else if(val !== "") {
                this.active = false;
            }
        }

        public trigger() {
            if(this.next) {
                this.$navigate.to(this.next);
            } else {
                this.$emit("click");
            }
        }
    }
</script>

<style lang="less" scoped>
    .kiwi-cell-item {
        .align(v-center);
        position: relative;
        width: 100%;
        min-height: 100px;
        padding: 20px 0;
        font-size: 28px;
        margin-top: -1PX;
        border-top: 1PX solid #e7e7e7;
        &.not-line,
        &.spacing {
            &::before {
                border: 0;
            }
        }
        &.arrow {
            padding-right: 60px;
            &::before {
                content: "\e71a";
                position: absolute;
                right: 30px;
                font-family: iconfont, sans-serif;
                font-size: 20px;
                color: #999;
                pointer-events: none;
            }
        }
        &.spacing {
            margin-bottom: 20px;
        }
        &.active::after {
            content: "";
            position: absolute;
            top: 6px;
            left: -14px;
            width: calc(100% + 28px);
            height: calc(100% - 12px);
            border-radius: 20px;
            border: 4px solid #66ff7e;
            pointer-events: none;
            animation: ActiveFlashing .7s 6 alternate forwards linear;
        }
        @keyframes ActiveFlashing {
            from {
                border-color: transparent;
            }
            to {
                border-color: #66ff7e;
            }
        }
        .wrapper {
            .align(v-center);
            min-height: 40px;
            line-height: 1;
            margin-right: 30px;
            .icon {
                margin-right: 20px;
                font-size: 40px;
                & + .title.important {
                    padding-left: 14px;
                    &::before {
                        left: 0;
                    }
                }
            }
            .title {
                font-size: 28px;
                color: #444;
                &.important {
                    &::before {
                        content: "\e8de";
                        margin-right: 2px;
                        vertical-align: super;
                        font-family: iconfont, sans-serif;
                        font-size: 13px;
                        color: #ff6405;
                    }
                }
                &.fixed {
                    display: block;
                }
            }
        }
        .content {
            .align(v-center);
            flex: 1;
            width: 0;
            min-height: 60px;
            word-break: break-all;
            font-size: 28px;
            color: #999;
            &:not(.left) {
                .align(right);
            }
            &.flex {
                display: flex;
            }
            :deep(.long) {
                display: block;
                width: 100%;
            }
            :deep(.right) {
                text-align: right;
            }
        }
    }
</style>
