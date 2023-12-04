// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/_breakpoints.scss" as *;
                           @use "@/assets/scss/_functions.scss" as *;
                           @use "@/assets/scss/_mixins.scss" as *;`,
        },
      },
    },
  },
});
