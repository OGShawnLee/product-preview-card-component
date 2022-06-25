import solid from "vite-plugin-solid";
import windicss from "vite-plugin-windicss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid(), windicss()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
