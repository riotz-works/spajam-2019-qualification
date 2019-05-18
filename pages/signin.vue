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
        
      </v-flex>
    </v-layout>
  </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

import firebase from '~/plugins/firebase'

export default Vue.extend({

  data: () => ({
    userDisplayName: 'loading'
  }),

  methods: {

    debug() {
    },
    
    signinFacebook() {

      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },

    signinTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();
      // provider.setCustomParameters({ 'lang': 'ja' });
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

  mounted() {
    firebase.auth().getRedirectResult().then((result: any) => {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      const currentUser = firebase.auth().currentUser
      console.log('currentUser', currentUser)
      this.userDisplayName = firebase.auth().currentUser!.displayName!
    }).catch((err) => {
      console.log('getRedirectResult failed.', err)
    })
  }
});
</script>


<style scoped lang="scss">
</style>
\