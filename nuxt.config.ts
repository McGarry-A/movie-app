// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@nuxt/image',
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: true,
        Poppins: [400, 500, 700, 900]
      }
    }]
  ],
  pinia: {
    storesDirs: ['stores']
  },
  image: {
    domains: [
      process.env.TMDB_IMG_DOMAIN!
    ],
    alias: {
      TMDB: process.env.TMDB_IMG_URL!
    }
  }
})
