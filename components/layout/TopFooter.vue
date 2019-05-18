<template>
  <v-footer dark app class="top-footer-bg">
    <v-layout align-center>
      <v-flex x12 text-xs-center>
        <span class="caption">&copy; {{ new Date().getFullYear() }} Riotz.works</span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({

});
</script>


<style scoped lang="scss">
.top-footer-bg {
  background-color: #A03334;
}
</style>
