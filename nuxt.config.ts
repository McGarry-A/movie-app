// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@nuxt/image'
  ],
  pinia: {
    storesDirs: ['stores']
  },
  image: {
    providers: {
      TMDB: {
        src: process.env.TMDB_IMG_URL
      }
    }
  }
})
