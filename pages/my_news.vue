<template>
  <section>
    <v-container>
      <v-layout wrap>
        <v-flex xs12>

          <p>User ID: {{ userId }}</p>
          <p>User name: {{ userName }}</p>

        </v-flex>
      </v-layout>

      <v-layout wrap>
        <v-flex xs12>

          <v-card
            class="mx-auto my-3"
            color="#26c6da"
            dark
            max-width="400"
            v-for="item in newsSources"
            :key="item.newsSourceId"
          >
            <v-card-title v-if="item.title">
              <v-icon
                large
                left
              >
                fiber_new
              </v-icon>
              <span class="font-weight-light">{{ item.title }}</span>
            </v-card-title>

            <v-card-text class="subheadline font-weight-bold">
              {{ item.text }}
            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>

    </v-container>
  </section>
</template>


<script lang="ts">
import Vue from 'vue'

// import TransitionMethods from '~/mixins/TransitionMethods'

import coreApi  from '~/plugins/core-api';
// import firebase from '~/plugins/firebase'

import { State } from "~/store/store";

export default Vue.extend({

  computed: {
    newsSources: () => State.newsSources,
    userId: () => State.coreApiUser.userId,
    userName: () =>  State.firebaseUser.displayName
  },

  data: () => ({}),

  mounted() {
    coreApi.get(`/dev/tweets/${State.twitterUserName}`).then((res: any) => {
      console.log(res)
    })
  }



});
</script>


<style scoped lang="scss">
</style>
