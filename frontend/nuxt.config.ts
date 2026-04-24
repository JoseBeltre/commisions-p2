// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // client-side only approach as requested (no server routes)
  css: ["~/assets/css/index.css"],
  devtools: { enabled: false }
})
