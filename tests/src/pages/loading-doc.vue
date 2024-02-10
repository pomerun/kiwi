<template>
    <div class="page">
        <kiwi-header line>Loading - 说明文档</kiwi-header>
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
        name: "PageComponentsLoadingDoc"
    })
    export default class PageComponentsLoadingDoc extends Vue {
        public params = [
            {
                name: "fix",
                text: "是否布满父级区域并时加载图标居中",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "size",
                text: "图标大小，default-默认、small-小、large-大",
                type: "string",
                optional: true,
                default: '"default"'
            },
            {
                name: "color",
                text: "图标颜色",
                type: "string",
                optional: true,
                default: '"#000"'
            },
            {
                name: "background",
                text: "背景色",
                type: "string",
                optional: true,
                default: `"transparent"`
            },
            {
                name: "center",
                text: "图标是否居中",
                type: "boolean",
                optional: true,
                default: "false"
            },
            {
                name: "type",
                text: "图标样式，spin-菊花转转转、point-小点闪闪闪",
                type: "string",
                optional: true,
                default: `"spin"`
            }
        ];

        public slots = [
            {
                name: "default",
                text: "自定义加载状态动画（使用了此插槽，预设动画将会失效）"
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
