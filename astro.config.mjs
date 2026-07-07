// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://hondakeiu.github.io",
  base: "onaka-mi",
  output: "static",
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `
  //           @use "/src/styles/mixins/mq.scss" as *;
  //         `,
  //       },
  //     },
  //   },
  // },
});
