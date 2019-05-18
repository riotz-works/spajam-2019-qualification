<template>
  <v-app toolbar footer>

    <div class="wrap-app-top hidden-md-and-up">
      <div class="wrap-app-top-mask">

        <top-header />

        <v-content class="app-content py-5">
          <nuxt />
        </v-content>

        <top-footer />

      </div>
    </div>

    <div class="wrap-app-top-pc hidden-sm-and-down">
      <div class="wrap-app-top-mask">

        <top-header />

        <v-content class="app-content py-5">
          <nuxt />
        </v-content>

        <top-footer />

      </div>
    </div>

  </v-app>
</template>


<script>
import Vue from 'vue';

import TopFooter from '~/components/layout/TopFooter.vue'
import TopHeader from '~/components/layout/TopHeader.vue'

export default Vue.extend({
  components: { TopFooter, TopHeader }
});
</script>


<style scoped>
</style>
