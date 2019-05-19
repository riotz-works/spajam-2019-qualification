<template>
  <section>

    <v-container>
      <v-layout wrap>
        <v-flex xs12>

          <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
          >
            <v-btn
              color="red darken-4"
              flat
              value="my_news"
              @click="toMyNewsPage"
            >
              <span>マイニュース</span>
              <v-icon>today</v-icon>
            </v-btn>

            <v-btn
              color="red darken-4"
              flat
              value="matching_news"
              @click="toMachingNewsPage"
            >
              <span>マッチングニュース</span>
              <v-icon>place</v-icon>
            </v-btn>

            <v-btn
              color="red darken-4"
              flat
              @click="signoutDialog = true"
            >
              <span>サインアウト</span>
              <v-icon>exit_to_app</v-icon>
            </v-btn>
          </v-bottom-nav>
          <v-dialog
            v-model="signoutDialog"
            width="500"
          >
            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                サインアウト
              </v-card-title>

              <v-card-text>
                サインアウトしてトップページに戻ります。よろしいですか？
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="signout"
                >
                  はい
                </v-btn>
                <v-btn
                  color="primary"
                  flat
                  @click="signoutDialog = false"
                >
                  いいえ
                </v-btn>

              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

import TransitionMethods from '~/mixins/TransitionMethods'

import firebase from '~/plugins/firebase'

import { State } from "~/store/store";

export default Vue.extend({

  data: () => ({
    bottomNav: State.currentBottomNav,
    signoutDialog: false
  }),

  methods: {
    signout() {
      firebase.auth().signOut().then(() => {
        // @ts-ignore
        this.toTopPage()
      }).catch((err) => {
        console.log('Sign-out failed', err)
      });
    }
  },

  mixins: [ TransitionMethods ],
});
</script>


<style scoped lang="scss">
</style>
