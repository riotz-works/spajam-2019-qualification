<template>
  <v-toolbar app flat dark color="black" height="40" class="top-header-bg">
    <div class="top-header-logo-wrap">
      <!-- <img src="~/assets/img/logo_enji.png" class="top-header-logo"> -->
    </div>
  </v-toolbar>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({

  data: () => ({
    dev: true
  }),

  methods: {
    signout() {
      console.log('Clicked sign out.');
    }
  }
});
</script>


<style scoped lang="scss">
.glo-header-logo-wrap {
  text-align: center;
  margin: auto;

}
.glo-header-logo {

  height: 40px;
  // width: 100%;
  // height: 100%;
  /* border: 1px solid #000 */
}
</style>
