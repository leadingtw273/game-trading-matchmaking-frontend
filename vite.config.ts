import react from "@vitejs/plugin-react";
import { defineConfig, Plugin } from "vite";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

// 自定義預加載插件
function createPreloadPlugin(): Plugin {
  return {
    name: "vite-plugin-preload",
    transformIndexHtml(html, ctx) {
      // 只在生產構建時應用
      if (!ctx.bundle) return html;

      const preloadTags: string[] = [];

      // 遍歷所有打包後的資源
      for (const [file] of Object.entries(ctx.bundle)) {
        // 匹配 PNG 文件
        if (file.match(/.*-[a-z-0-9]*\.png$/)) {
          preloadTags.push(`<link rel="preload" href="${file}" as="image" type="image/png">`);
        }
      }

      // 將預加載標籤注入到 head 中
      return html.replace("</head>", `${preloadTags.join("\n")}\n</head>`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression(), viteImagemin(), createPreloadPlugin()],
  server: {
    host: "0.0.0.0", // 配置讓開發環境的 docker 容器可以被外部訪問
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;
                         @use "@/styles/mixins.scss" as *;`,
      },
    },
  },
});
