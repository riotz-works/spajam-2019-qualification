<template>
  <section>

    <v-container>
      <v-layout wrap>
        <v-flex xs6 text-xs-center>
          <v-btn fab dark large color="pink">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <span>Push</span>
        </v-flex>
        <v-flex xs6 text-xs-center>
          <v-btn fab dark large color="green">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <span>Watch</span>
        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
});
</script>


<style scoped lang="scss">
</style>
