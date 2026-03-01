export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  
  app: {
    baseURL: '/kkhband/',
    head: {
      title: '511 BAND — 공연 초대장',
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '511 밴드 공연 초대장' },
        { property: 'og:title', content: '511 BAND 공연 초대장' },
        { property: 'og:description', content: '511 밴드 공연 초대장' },
        { property: 'og:type', content: 'website' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  
  compatibilityDate: '2024-11-22'
})