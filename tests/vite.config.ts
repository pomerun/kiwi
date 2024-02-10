import path from "node:path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import postcssPxtorpx from "@pecasha/postcss-pxtorpx";

export default defineConfig({
    plugins: [
        uni()
    ],
    optimizeDeps: {
        include: [
            "@pecasha/uniapp-helpers",
            "@pecasha/uniapp-modules"
        ]
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "@/styles/control.module.less";`
            }
        },
        postcss: {
            plugins: [
                postcssPxtorpx({
                    propList: ["*"]
                })
            ]
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "http://localhost:7002",
                changeOrigin: true,
                secure: false
            }
        }
    }
});
