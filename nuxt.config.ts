export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  
  app: {
    baseURL: '/511/',
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
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  
  compatibilityDate: '2024-11-22'
})