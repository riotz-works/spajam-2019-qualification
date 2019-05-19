import Vue from "vue";

export const State: { [key: string]: any } = Vue.observable({
  currentBottomNav: '',

  firebaseUser: '',
  coreApiUser: '',
  twitterUserName: '',
  newsSources: [
    {
      title: '東京A予選真っ最中。テーマは「NEWS」',
      text: '午前中のアイデアソンを終え、各チームが開発にいそしんでいます。明日の発表が楽しみですね。',
      imageUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      newsSourceId: 'news_source_id_1',
      selected: false
    }
    // {
    //   title: '東京A予選真っ最中。テーマは「NEWS」',
    //   text: '午前中のアイデアソンを終え、各チームが開発にいそしんでいます。明日の発表が楽しみですね。',
    //   imageUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    //   newsSourceId: 'news_source_id_2',
    //   selected: false
    // }
  ],
  matchingSources: [


  ]

});
