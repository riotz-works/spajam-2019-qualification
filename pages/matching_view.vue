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
              {{ item.text }} ({{ item.author }})
            </v-card-text>

            <v-card-actions>
              <v-layout
                align-center
                justify-end
              >
                <v-btn icon outline class="mr-1" href="https://www.amazon.jp/hz/wishlist/ls/2NL4AB9HBSXWN?ref_=wl_share"><v-icon>shop</v-icon></v-btn>
                <a href="http://twitter.com/share?text=@tipmona%20tip%20@john_iwaku%200.011874%20MONA%e3%82%92%e8%b4%88%e3%82%8a%e3%81%be%e3%81%99%20%0d%0a%e3%82%b3%e3%83%a1%e3%83%b3%e3%83%88%3a"><img src="~/assets/image/monacoin.png" width="120"></a>
              </v-layout>
            </v-card-actions>
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
    newsSources: () => State.matchingSources,
    userId: () => State.coreApiUser.userId,
    userName: () =>  State.firebaseUser.displayName
  },

  data: () => ({}),

  created() {

    State.currentBottomNav = 'matching_news'

  },

  methods: {

  },

  mounted() {
    console.log('get my news')
    coreApi.get(`/tweets/lulzneko`).then((res: any) => {
      res.data.forEach((rawNewsSource: any) => {

        const duplicated = State.matchingSources.filter((s: any) => s.text === rawNewsSource.text)
        if (duplicated.length > 0) {
          return;
        }

        if (rawNewsSource.text.includes('SPAJAM')
          || rawNewsSource.text.includes('アプリ')) {
            const imageUrl = rawNewsSource.entities && rawNewsSource.entities.media && rawNewsSource.entities.media.length > 0 && rawNewsSource.entities.media[0].type === 'photo' ? rawNewsSource.entities.media[0].media_url : undefined
            State.matchingSources.push({
              text: rawNewsSource.text,
              newsSourceId: rawNewsSource.tweetId,
              imageUrl,
              author: 'lulzneko'
            })
          }
      })
      console.log(res)
    })
    .then(() => {
      coreApi.get(`/tweets/lopburny`).then((res: any) => {
        res.data.forEach((rawNewsSource: any) => {

          const duplicated = State.matchingSources.filter((s: any) => s.text === rawNewsSource.text)
          if (duplicated.length > 0) {
            return;
          }


          if (rawNewsSource.text.includes('SPAJAM')
            || rawNewsSource.text.includes('アプリ')) {
              const imageUrl = rawNewsSource.entities && rawNewsSource.entities.media && rawNewsSource.entities.media.length > 0 && rawNewsSource.entities.media[0].type === 'photo' ? rawNewsSource.entities.media[0].media_url : undefined
              State.matchingSources.push({
                text: rawNewsSource.text,
                newsSourceId: rawNewsSource.tweetId,
                imageUrl,
                author: 'lopburny'
              })
            }
        })
      })
    })

  }



});
</script>


<style scoped lang="scss">
</style>
