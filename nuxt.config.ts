export default defineNuxtConfig({
  app: {
    baseURL: '/511/',
    head: {
      title: '지환 ♥ 형걸 결혼합니다',
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'description', content: '김지환 ♥ 이형걸 결혼식에 초대합니다. 2026년 5월 17일 일요일 오후 1시' },
        { property: 'og:title', content: '지환 ♥ 형걸 결혼합니다' },
        { property: 'og:description', content: '2026년 5월 17일 일요일 오후 1시 | 그랜드 컨벤션홀' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://silver1344.github.io/511/og-image.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://silver1344.github.io/511/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '지환 ♥ 형걸 결혼합니다' },
        { name: 'twitter:description', content: '2026년 5월 17일 일요일 오후 1시 | 그랜드 컨벤션홀' },
        { name: 'twitter:image', content: 'https://silver1344.github.io/511/og-image.svg' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-22'
})
