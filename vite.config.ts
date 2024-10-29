import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
import viteInjectPreload from "vite-plugin-inject-preload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    viteImagemin(),
    viteInjectPreload({
      files: [
        {
          match: /.*-[a-z-0-9]*\.png$/,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";
                         @import "@/styles/mixins.scss";`,
      },
    },
  },
});
