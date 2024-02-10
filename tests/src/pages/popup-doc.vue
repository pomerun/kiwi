<template>
    <div class="page">
        <kiwi-header line>Popup - 说明文档</kiwi-header>
        <div class="container">
            <h2 id="params">参数</h2>
            <ul class="params">
                <li v-for="(item,index) in params"
                    :key="index">
                    <h3>{{item.name}}</h3>
                    <small>{{item.text}}</small>
                    <p>
                        <span>类型：</span>
                        <em>{{item.type}}</em>
                    </p>
                    <p>
                        <span>是否可选：</span>
                        <em>{{item.optional?"是":"否"}}</em>
                    </p>
                    <p v-if="item.default">
                        <span>默认值：</span>
                        <em>{{item.default}}</em>
                    </p>
                </li>
            </ul>
        </div>
        <div class="container">
            <h2 id="events">事件</h2>
            <ul class="events">
                <li v-for="(item,index) in events"
                    :key="index">
                    <h3>{{item.name}}</h3>
                    <small>{{item.text}}</small>
                    <p v-if="item.params">
                        <span>形参：</span>
                        <em>{{item.params}}</em>
                    </p>
                </li>
            </ul>
        </div>
        <div class="container">
            <h2 id="slots">插槽</h2>
            <ul class="slots">
                <li v-for="(item,index) in slots"
                    :key="index">
                    <h3>{{item.name}}</h3>
                    <small>{{item.text}}</small>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-facing-decorator";

    @Component({
        name: "PageComponentsPopupDoc"
    })
    export default class PageComponentsPopupDoc extends Vue {
        public params = [
            {
                name: "model-value",
                text: "显示/隐藏，可通过v-model双向绑定，也可使用value单向控制",
                type: "boolean",
                optional: false
            },
            {
                name: "center",
                text: "内容是否居中显示",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "zIndex",
                text: "自定义层级",
                type: "number",
                optional: true,
                default: "999"
            },
            {
                name: "disTransition",
                text: "是否禁用显隐过渡效果",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "background",
                text: "弹出层遮罩背景色",
                type: "string",
                optional: true,
                default: "rgba(0,0,0,.6)"
            },
            {
                name: "transition",
                text: "过渡效果名称\n预设效果：\nfade 渐变\npopup-fade-in-up 从底部渐变出现\npopup-fade-in-bottom 从顶部渐变出现\npopup-fade-in-left 从左侧渐变出现\npopup-fade-in-right 从右侧渐变出现\npopup-fade-in-scale 从中心缩放渐变",
                type: "string",
                optional: true,
                default: '"fade"'
            },
            {
                name: "flex",
                text: "内容区域使用伸缩盒布局",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "closeOnClickOverlay",
                text: "点击遮罩是否关闭弹出层",
                type: "boolean",
                optional: true,
                default: "true"
            },
            {
                name: "bottom",
                text: "弹出层顶部空余距离（使用场景例如需要弹出层不遮住导航栏的时候，需带单位）",
                type: "string",
                optional: true,
                default: '"0"'
            },
            {
                name: "position",
                text: "自定义position",
                type: "string",
                optional: true,
                default: '"fixed"'
            },
            {
                name: "blur",
                text: "遮罩背景是否高斯模糊",
                type: "boolean",
                optional: true,
                default: "false"
            }
        ];

        public events = [
            {
                name: "maskTrigger",
                text: "遮罩点击事件",
                params: "[object]遮罩层元素event"
            }
        ];

        public slots = [
            {
                name: "default",
                text: "弹窗内容区域"
            }
        ];
    }
</script>

<style lang="less" scoped>
    .container {
        margin-top: 20px;
        background-color: #fff;
        > h2 {
            width: 100%;
            padding: 30px 30px 0;
            line-height: 40px;
            font-weight: bold;
            font-size: 34px;
        }
        > ul {
            width: 100%;
            > li {
                width: 100%;
                padding: 30px;
                &:not(:last-child) {
                    border-bottom: 1PX solid #eee;
                }
                > h3 {
                    width: 100%;
                    margin-bottom: 10px;
                    line-height: 36px;
                    text-decoration: underline;
                    font-size: 30px;
                }
                > small {
                    width: 100%;
                    line-height: 30px;
                    white-space: pre-line;
                    font-size: 24px;
                    color: #999;
                }
                > p {
                    display: flex;
                    width: 100%;
                    margin-top: 10px;
                    font-size: 26px;
                    > span {
                        display: block;
                        width: 5.5em;
                        line-height: 32px;
                    }
                    > em {
                        flex: 1;
                        width: 0;
                        line-height: 32px;
                        word-break: break-all;
                    }
                }
            }
        }
    }
</style>
