<template>
  <section>

  <v-container>
    <v-layout wrap>
      <v-flex xs12>

          <v-list
            class="order-list-bg py-0"
            two-line
          >
            <template v-for="item in menu">
              <v-list-tile
                ripple
                :key="item.id"
              >
                <v-list-tile-avatar>
                  <v-icon>event</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.date }} ({{ getDay(item.date) }})
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ item.title }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action v-if="!reservedItems.includes(item.id)">
                  <v-btn
                    color="blue darken-2"
                    class="order-action-btn"
                    fab
                    small
                    outline
                    @click="toOrderItemPage(item.id)"
                  >
                    <!-- <v-icon>arrow_forward</v-icon> -->
                    予約
                  </v-btn>
                </v-list-tile-action>

                <v-list-tile-action v-if="reservedItems.includes(item.id)">
                  <v-btn
                    outline
                    small
                    fab
                    color="green"
                    class="order-action-btn"
                    @click="toOrderItemPage(item.id)"
                  >
                    確認
                    <!-- <v-icon color="green">done</v-icon> -->
                  </v-btn>
                </v-list-tile-action>
                
              </v-list-tile>
              <v-divider :key="item.date"></v-divider>
            </template>

          </v-list>


      </v-flex>
    </v-layout>
  </v-container>

  </section>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  data: () => ({
        items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]
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
