# Kiwi - 几维
> 适用于 uni-app 的UI组件库

## 安装方式
使用npm或yarn进行安装
```shell
npm i @pomerun/kiwi
```
```shell
yarn add @pomerun/kiwi
```
## 引用方式
在`App.vue`中引入组件样式
```html
<style lang="less" src="@pomerun/kiwi/styles/kiwi.less"/>
```
在`pages.json`中配置kiwi组件按需引入
```json
{
    "easycom": {
        "custom": {
            "^kiwi-(.*)": "@pomerun/kiwi/components/$1.vue"
        }
    }
}
```
在页面中使用
```vue
<kiwi-button>确定按钮</kiwi-button>
```
