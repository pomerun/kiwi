<script lang="ts">
    import { Vue, Component, Hook } from "vue-facing-decorator";

    @Component
    export default class App extends Vue {
        @Hook
        async onLaunch() {
            console.log("App Launch");
        }

        @Hook
        onShow() {
            console.log("App Show");
        }

        @Hook
        onHide() {
            console.log("App Hide");
        }
    }
</script>

<style lang="less">
    @import "@/styles/default.less";
    @import "../../styles/kiwi.less";
</style>
