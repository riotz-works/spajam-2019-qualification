<template>
  <v-app toolbar footer>
    <div class="wrap-app">
      <div class="wrap-app-mask">

        <global-header />

        <v-content class="app-content">
          <nuxt />
        </v-content>

        <global-footer />

      </div>
    </div>
  </v-app>
</template>


<script>
import Vue from 'vue'

import GlobalFooter from '~/components/layout/GlobalFooter.vue'
import GlobalHeader from '~/components/layout/GlobalHeader.vue'

export default Vue.extend({
  components: { GlobalHeader, GlobalFooter }

});
</script>


<style scoped lang="scss">
</style>
