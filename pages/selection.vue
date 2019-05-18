<template>
  <section>

  <v-container>
    <v-layout wrap>
      <v-flex xs12>

          <v-list
            class="order-list-bg py-0"
            light
            two-line
          >
            <template v-for="item in newsSources">
              <v-list-tile
                ripple
                :key="item.newsSourceId"
              >
                <v-list-tile-action>
                  <v-checkbox
                    v-model="item.selected"
                  ></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.title }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ item.text }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  <img :src="item.pictureUrl">
                </v-list-tile-avatar>
              </v-list-tile>
            </template>
          </v-list>

      </v-flex>
    </v-layout>
  </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

import State from "~/store/store";

export default Vue.extend({

  computed: {
    newsSources: () => State.newsSources
  },

  data: () => ({
  }),

  methods: {

    debug() {
      console.log('debug')
    }

  }
});
</script>


<style scoped lang="scss">
</style>
