<template>
  <section>

    <v-container>
      <v-layout wrap>
        <v-flex xs12 text-xs-center>
          <v-btn fab dark large color="pink" @click="onMatch">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <span>マッチングニュースを表示する</span>
        </v-flex>
      </v-layout>

      <v-layout wrap>
        <v-flex xs6 text-xs-center>
        </v-flex>
        <v-flex xs6 text-xs-center>

        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog
      v-model="matching"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          text-xs-center
        >
          マッチングニュースを表示します。
        </v-card-title>
        <img src="~/assets/image/matching_view_qr.png">

        <!-- <v-card-text>
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
        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
         <v-btn
            color="primary"
            flat
            @click="matching = false"
          >
            閉じる
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- <v-dialog
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
    </v-dialog> -->

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    // nfcDialog: false,
    // nfcUnsupported: false,
    // watchMessage: ''

    matching: false
  }),

  methods: {
    onMatch() {
      this.matching = true

    }
    // onPush() {
    //   this.nfcDialog = true

    //   // @ts-ignore
    //   if (navigator.nfc) {
    //     (navigator as any).nfc.push({ data: 'test'}).then(() => this.nfcDialog = false)
    //   }
    // },

    // onWatch() {
    //   this.nfcDialog = true

    //   // @ts-ignore
    //   if (navigator.nfc) {
    //     (navigator as any).nfc.watch((msg: any) => this.watchMessage = msg).then(() => this.nfcDialog = false)
    //   }
    // }
  },

  mounted() {
    // // @ts-ignore
    // if (!navigator.nfc) {
    //   //
    // } else {
    //   this.nfcUnsupported = true
    // }
  }

});
</script>


<style scoped lang="scss">
</style>
