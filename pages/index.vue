<template>
  <section>
    <v-container fill-height class="pt-0 mt-0 pb-1">

      <v-layout
        wrap align-end class="mt-0"
        v-if="isLoading"
      >
        <v-flex text-xs-center>
          <v-progress-circular
            indeterminate
            :size="70"
            color="pink"
          ></v-progress-circular>
        </v-flex>
      </v-layout>

      <v-layout wrap align-end class="mt-5" v-if="!isLoading">
        <v-flex xs12>
          <v-btn
            block
            class="mb-4 top-button-transparent"
            dark
            @click="signinTwitter"
          >
            Twitterでサインインする
          </v-btn>
          <v-btn
            block
            class="mt-4 mb-4 top-button-transparent"
            dark
            @click="signinFacebook"
          >
            Facebookでサインインする
          </v-btn>
          <v-alert light :value="true" color="black" icon="info" outline class="pt-2 x-v-alert-info">
            このアプリはiOS11.3以上／Android7.0以上に最適化されています。正しく動作しない場合、WEB画面のままでもご利用いただけます。PCの場合、Google Chrome または Safariをご利用ください。Internet Exprolerはサポートされません。(v{{ appVersion }})
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>


  </section>
</template>


<script lang="ts">
import Vue from 'vue'

import TransitionMethods from '~/mixins/TransitionMethods'

import coreApi  from '~/plugins/core-api';
import firebase from '~/plugins/firebase'

import { State } from "~/store/store";

export default Vue.extend({

  data: () => ({
    appVersion: process.env.APP_VERSION,
    isLoading: true
  }),

  layout: 'top',

  methods: {
    getRedirectResult() {
      firebase.auth().getRedirectResult().then((result: any) => {
        console.log('getRedirectResult', result)
        const currentUser = firebase.auth().currentUser
        if (currentUser && currentUser.displayName) {
          State.firebaseUser = currentUser
          this.signupCoreApi(result)
        } else {
          this.isLoading = false
        }
      }).catch((err) => {
        console.log('getRedirectResult failed.', err)
        this.isLoading = false
      })
    },

    signupCoreApi(getRedirectResult: any) {
      coreApi.post('/signup', {
        id     : getRedirectResult.credential.providerId,
        userId : getRedirectResult.user.uid,
        token  : {
          access : getRedirectResult.credential.accessToken,
          refresh: getRedirectResult.credential.refreshToken
        }
      }).then((res: any) => {
        console.log('coreApi /signup response', res)
        State.coreApiUser = res.data
        // @ts-ignore
        this.toMyNewsPage()
      });
    },

    signinFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },

    signinTwitter() {
      firebase.auth().signOut().then(() => {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      })
    },
  },

  mixins: [ TransitionMethods ],

  mounted() {
    if (!firebase.auth().currentUser) {
      this.getRedirectResult()
    } else {
      // @ts-ignore
      this.toMyNewsPage()
    }
  }

});

</script>

<style scoped lang="scss">
section {
  height: 85%;
}

.top-main-logo {
  width: 100%;
  border: 1px solid #000
}

.top-button-transparent {
  background-color: rgb(78, 43, 43) !important;
  opacity: 0.9;
}

.x-v-alert-info {
  font-size: smaller;
  background-color: rgba(220, 220, 220, 0.8) !important;
}
</style>
