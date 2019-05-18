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

  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${require('~/package.json').displayName}` : 'SPAJAM 2019 東京A予選'
  }
}

export default config
