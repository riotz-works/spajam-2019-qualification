import NuxtConfiguration from '@nuxt/config'
import pkg from './package.json'

const config: NuxtConfiguration = {
  mode: 'spa',

  build: {
    publicPath: '/static/'
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

  modules: [
    [ '@nuxtjs/pwa', {}],
    [ '@nuxtjs/sitemap', {}]
  ],

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