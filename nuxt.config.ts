// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss'],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  alias: {
    "@": resolve(__dirname, "/"),
    "@assets": resolve(__dirname, "/assets"),
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  imports: {
    dirs: ["./stores/**"],
  },
  router: {
    options: {
      sensitive: true,
      strict: true,
    },
  },
  ssr: false,
})
