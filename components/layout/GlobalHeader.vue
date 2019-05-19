<template>
  <v-toolbar app flat dark color="black" class="top-header-bg">
    <div class="glo-header-logo-wrap">
      <!-- SPAJAM2019 / 目の前の人とニュースで仲良くなるアプリ -->
      <img src="~/assets/image/logo.png" class="glo-header-logo">
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
