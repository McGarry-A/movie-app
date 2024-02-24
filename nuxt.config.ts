// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: [400, 700],
        Lora: [500, 600, 700]
      }
    }
    ]
  ],
  pinia: {
    storesDirs: ['stores']
  }
})
