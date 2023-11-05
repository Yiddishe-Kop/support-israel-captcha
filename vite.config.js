import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        embed: fileURLToPath(new URL("./src/embed.js", import.meta.url)),
        demo: fileURLToPath(new URL("./index.html", import.meta.url)),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, "src/embed.js"),
  //     name: "embed",
  //     formats: ["es", "cjs"],
  //     fileName: (format) => `embed.${format}.js`,
  //   },
  // },
  // define: {
  //   "process.env": {},
  // },
});
