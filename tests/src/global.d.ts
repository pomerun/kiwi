type VueInstance = InstanceType<import("vue-facing-decorator").VueCons>;
type ComponentPublicInstance = import("vue").ComponentPublicInstance;

declare const $vue: ComponentPublicInstance;

interface Window {
    vv: VueInstance;
    $vue: ComponentPublicInstance;
}
