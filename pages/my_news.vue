<template>
  <section>

    <v-container>
      <v-layout wrap>
        <v-flex xs12>

          <p>User ID: {{ userId }}</p>
          <p>User name: {{ userName }}</p>

        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

// import TransitionMethods from '~/mixins/TransitionMethods'

// import coreApi  from '~/plugins/core-api';
// import firebase from '~/plugins/firebase'

import { State } from "~/store/store";

export default Vue.extend({

  computed: {
    userId: () => State.coreApiUser.userId,
    userName: () =>  State.firebaseUser.displayName
  }
});
</script>


<style scoped lang="scss">
</style>
