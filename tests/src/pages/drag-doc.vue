<template>
    <div class="page">
        <kiwi-header line>Drag - 说明文档</kiwi-header>
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
                    <p>
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
                name: "dock",
                text: "是否边缘吸附",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "existTabBar",
                text: "当前使用是否为tab-bar页面（仅APP环境需要传入）",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "width",
                text: "自定义组件宽度，单位rpx（若不传入则会自动获取内容区域宽度）",
                type: "number",
                optional: true,
                default: "auto"
            },
            {
                name: "height",
                text: "自定义组件高度，单位rpx（若不传入则会自动获取内容区域高度）",
                type: "number",
                optional: true,
                default: "auto"
            },
            {
                name: "top",
                text: "自定义拖拽区域顶部边缘内边距，单位px",
                type: "number",
                optional: true,
                default: "0"
            },
            {
                name: "left",
                text: "自定义拖拽区域左侧边缘内边距，单位px",
                type: "number",
                optional: true,
                default: "0"
            },
            {
                name: "right",
                text: "自定义拖拽区域右侧边缘内边距，单位px",
                type: "number",
                optional: true,
                default: "0"
            },
            {
                name: "bottom",
                text: "自定义拖拽区域底部边缘内边距，单位px",
                type: "number",
                optional: true,
                default: "0"
            },
            {
                name: "edge",
                text: "自定义拖拽区边缘基础边距，单位px",
                type: "number",
                optional: true,
                default: "10"
            },
            {
                name: "center",
                text: "内容是否居中（当拖拽组件热区需要比内容大时，可以使内容居中显示）",
                type: "boolean",
                optional: true,
                default: "true"
            },
            {
                name: "zIndex",
                text: "自定义层级",
                type: "number",
                optional: true,
                default: "500"
            }
        ];

        public events = [
            {
                name: "touchstart",
                text: "拖拽按下事件",
                params: "[object]event"
            },
            {
                name: "touchend",
                text: "拖拽松开事件",
                params: "[object]event"
            },
            {
                name: "click",
                text: "点击事件",
                params: "[object]event"
            }
        ];

        public slots = [
            {
                name: "default",
                text: "内容区域"
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
