<template>
  <section>
    <v-container class="mb-5">
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

            <v-img v-if="item.imageUrl" :src="item.imageUrl"></v-img>

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
    if (State.twitterUserName && State.twitterUserName.length > 0) {
      console.log('get my news')
      coreApi.get(`/tweets/${State.twitterUserName}`).then((res: any) => {
        res.data.forEach((rawNewsSource: any) => {
          const imageUrl = rawNewsSource.entities && rawNewsSource.entities.media && rawNewsSource.entities.media.length > 0 && rawNewsSource.entities.media[0].type === 'photo' ? rawNewsSource.entities.media[0].media_url : undefined
          State.newsSources.push({
            text: rawNewsSource.text,
            newsSourceId: rawNewsSource.tweetId,
            imageUrl
          })
        })
        console.log(res)
      })
    }
  }



});
</script>


<style scoped lang="scss">
</style>
