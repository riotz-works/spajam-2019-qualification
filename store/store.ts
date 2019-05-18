import Vue from "vue";

const State: { [key: string]: any } = Vue.observable({

  currentUser: null,
  newsSources: [
    {
      title: '東京A予選真っ最中。テーマは「XXX」',
      text: '午前中のアイデアソンを終え、各チームが開発にいそしんでいます。明日の発表が楽しみですね。',
      pictureUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      movieUrl: '',
      newsSourceId: 'news_source_id_1',
      selected: false
    }
  ]

});

export default State
