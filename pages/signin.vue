<template>
  <section>

  <v-container>
    <v-layout wrap>
      <v-flex xs12>

        <v-btn @click="signinFacebook">facebook</v-btn>

        <br />

        <v-btn @click="signinTwitter">Twitter</v-btn>

        <br />

        <v-btn @click="signout">Signout</v-btn>

        <p>User Display Name: {{ userDisplayName }}</p>

        <v-btn @click="toMyNewsPage">My News</v-btn>

        <br />

        <v-btn @click="toMachingNewsPage">Matching News</v-btn>

      </v-flex>
    </v-layout>
  </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'
import TransitionMethods from '~/mixins/TransitionMethods'

import coreApi from '~/plugins/core-api';
import firebase from '~/plugins/firebase'

import { State } from "~/store/store";

export default Vue.extend({

  data: () => ({
    userDisplayName: 'loading...'
  }),

  layout: 'top',

  methods: {

    debug() {
    },

    signinFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },

    signinTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithRedirect(provider);

    },

    signout() {
      firebase.auth().signOut().then(function() {
        console.log('Sign-out successful')
      }).catch(function(err) {
        console.log('Sign-out failed', err)
      });
    }
  },

  mixins: [ TransitionMethods ],

  mounted() {
    if (!firebase.auth().currentUser) {
      firebase.auth().getRedirectResult().then((result: any) => {
        if (result.credential) {
          // const token = result.credential.accessToken;
        }

        console.log('redirect ok')
        console.log(result)

        const currentUser = firebase.auth().currentUser
        if (currentUser && currentUser.displayName) {
          State.currentUser = currentUser
          this.userDisplayName = currentUser.displayName
          console.log(result)
          coreApi.post('/signup', {
            id: result.credential.providerId,
            userId: result.user.uid,
            username: result.additionalUserInfo.profile.screen_name,
            token: {
              access:  result.credential.accessToken,
              refresh: result.credential.refreshToken
            }
          });
        } else {
          this.userDisplayName = 'Not signed in'
        }
      }).catch((err) => {
        console.log('getRedirectResult failed.', err)
        this.userDisplayName = 'Failed'
      })
    }
  }
});
</script>


<style scoped lang="scss">
</style>
