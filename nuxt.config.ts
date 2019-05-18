import NuxtConfiguration from '@nuxt/config'
import * as axiosRetry from 'axios-retry';
import pkg from './package.json'

const config: NuxtConfiguration = {
  mode: 'spa',

  build: {
    publicPath: '/static/'
  },

  env: {
    CORE_API: process.env.CORE_API || '',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
    APP_VERSION: pkg.version
  },

  router: {
    base: `/${ pkg.name }/`
  },

  loading: { color: '#fff' },

  meta: {
    ogHost: pkg.applicationHost
  },

  manifest: {
    name: pkg.displayName,
    short_name: pkg.displayShortName,
    description: pkg.description,
    display: 'fullscreen',
    lang: 'ja',
    scope: `/${pkg.name}/`,
    theme_color: '#000',
    background_color: '#000'
  },

  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${require('~/package.json').displayName}` : 'SPAJAM 2019 東京A予選'
  },

  css: [
    '@/assets/css/main.scss'
  ],

  modules: [
    [ '@nuxtjs/axios', {}],
    [ '@nuxtjs/dotenv', {}],
    [ '@nuxtjs/pwa', {}],
    [ '@nuxtjs/sitemap', {}],
    [ '@nuxtjs/vuetify', {}]
  ],
  vuetify: {
    //  theme: { }
  },

  plugins: [
    { src: '~/plugins/firebase', ssr: false }
  ],

  axios: {
    retry: {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay
    }
  },

  sitemap: {
    hostname: `${pkg.applicationHost}/${pkg.name}`,
    gzip: true,
    generate: true
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [ 0, 200 ]}}
      },
      {
        urlPattern: '\.(?:png|gif|jpg|jpeg|svg)$',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheExpiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }}
      }
    ]
  }
}

export default config
