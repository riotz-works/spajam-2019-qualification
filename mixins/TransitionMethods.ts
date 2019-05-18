import { State } from "~/store/store"

export default {

  methods: {

    toSignin() {
      // @ts-ignore
      this.$router.push({ path: '/signin' })
    },

    toTopPage() {
      State.globalBottomNav = 'top'
      // @ts-ignore
      this.$router.push({ path: '/' })
    },

    toMyNewsPage() {
      State.currentBottomNav = 'my_news'
      // @ts-ignore
      this.$router.push({ path: '/my_news' })
    },

    toMachingNewsPage() {
      State.currentBottomNav = 'matching_news'
      // @ts-ignore
      this.$router.push({ path: '/matching_news' })
    }
  }
}
