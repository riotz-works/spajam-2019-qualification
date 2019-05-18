<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>

        <v-btn @click="toSignin">Signin</v-btn>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
import TransitionMethods from '~/mixins/TransitionMethods'


export default Vue.extend({
  layout: 'news',
  mixins: [ TransitionMethods ],

});

</script>


<style>
</style>
