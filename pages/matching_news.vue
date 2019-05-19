<template>
  <section>

    <v-container>
      <v-layout wrap>
        <v-flex xs6 text-xs-center>
          <v-btn fab dark large color="pink" @click="onPush">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <span>Push</span>
        </v-flex>
        <v-flex xs6 text-xs-center>
          <v-btn fab dark large color="green" @click="onWatch">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <span>Watch</span>
        </v-flex>
      </v-layout>

      <v-layout wrap>
        <v-flex xs6 text-xs-center>
        </v-flex>
        <v-flex xs6 text-xs-center>
          <span>{{ watchMessage }}</span>

        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog
      v-model="nfcDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          text-xs-center
        >
          NFC通信を開始します...
        </v-card-title>

        <v-card-text>
          <v-layout
            wrap align-end class="mt-0"
          >
            <v-flex text-xs-center>

              <v-progress-circular
                indeterminate
                :size="70"
                color="pink"
              ></v-progress-circular>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
         <v-btn
            color="primary"
            flat
            @click="nfcDialog = false"
          >
            閉じる
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="nfcUnsupported"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          text-xs-center
        >
          NFCをサポートしていない環境です。
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
         <v-btn
            color="primary"
            flat
            @click="nfcUnsupported = false"
          >
            閉じる
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    nfcDialog: false,
    nfcUnsupported: false,

    watchMessage: ''
  }),

  methods: {
    onPush() {
      this.nfcDialog = true

      if ((navigator as any).nfc) {
        (navigator as any).nfc.push({ data: 'test'}).then(() => this.nfcDialog = false)
      }
    },

    onWatch() {
      this.nfcDialog = true

      if ((navigator as any).nfc) {
        (navigator as any).nfc.watch((msg: any) => this.watchMessage = msg).then(() => this.nfcDialog = false)
      }
    }
  },

  mounted() {
    // @ts-ignore
    if (!navigator.nfc) {
      //
    } else {
      this.nfcUnsupported = true
    }
  }

});
</script>


<style scoped lang="scss">
</style>
