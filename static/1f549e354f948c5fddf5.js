(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(t,e,n){"use strict";var r=n(78),o=n.n(r).a.create({baseURL:"https://7ciyp38wlb.execute-api.ap-northeast-1.amazonaws.com/dev"});e.a=o},209:function(t,e,n){t.exports=n.p+"img/79b68a4.png"},214:function(t,e,n){"use strict";n.r(e);n(63),n(79);var r=n(1),o=n(206),c=n(22),l=r.default.extend({computed:{newsSources:function(){return c.State.matchingSources},userId:function(){return c.State.coreApiUser.userId},userName:function(){return c.State.firebaseUser.displayName}},data:function(){return{}},created:function(){c.State.currentBottomNav="matching_news"},methods:{},mounted:function(){console.log("get my news"),o.a.get("/tweets/lulzneko").then(function(t){t.data.forEach(function(t){if(!(c.State.matchingSources.filter(function(s){return s.text===t.text}).length>0)&&(t.text.includes("SPAJAM")||t.text.includes("アプリ"))){var e=t.entities&&t.entities.media&&t.entities.media.length>0&&"photo"===t.entities.media[0].type?t.entities.media[0].media_url:void 0;c.State.matchingSources.push({text:t.text,newsSourceId:t.tweetId,imageUrl:e,author:"lulzneko"})}}),console.log(t)}).then(function(){o.a.get("/tweets/lopburny").then(function(t){t.data.forEach(function(t){if(!(c.State.matchingSources.filter(function(s){return s.text===t.text}).length>0)&&(t.text.includes("SPAJAM")||t.text.includes("アプリ"))){var e=t.entities&&t.entities.media&&t.entities.media.length>0&&"photo"===t.entities.media[0].type?t.entities.media[0].media_url:void 0;c.State.matchingSources.push({text:t.text,newsSourceId:t.tweetId,imageUrl:e,author:"lopburny"})}})})})}}),d=n(6),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-container",{staticClass:"mb-5"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},t._l(t.newsSources,function(e){return r("v-card",{key:e.newsSourceId,staticClass:"mx-auto my-3",attrs:{color:"#26c6da",dark:"","max-width":"400"}},[e.title?r("v-card-title",[r("v-icon",{attrs:{large:"",left:""}},[t._v("\n              fiber_new\n            ")]),t._v(" "),r("span",{staticClass:"font-weight-light"},[t._v(t._s(e.title))])],1):t._e(),t._v(" "),e.imageUrl?r("v-img",{attrs:{src:e.imageUrl}}):t._e(),t._v(" "),r("v-card-text",{staticClass:"subheadline font-weight-bold"},[t._v("\n            "+t._s(e.text)+" ("+t._s(e.author)+")\n          ")]),t._v(" "),r("v-card-actions",[r("v-layout",{attrs:{"align-center":"","justify-end":""}},[r("v-btn",{staticClass:"mr-1",attrs:{icon:"",outline:"",href:"https://www.amazon.jp/hz/wishlist/ls/2NL4AB9HBSXWN?ref_=wl_share"}},[r("v-icon",[t._v("shop")])],1),t._v(" "),r("a",{attrs:{href:"http://twitter.com/share?text=@tipmona%20tip%20@john_iwaku%200.011874%20MONA%e3%82%92%e8%b4%88%e3%82%8a%e3%81%be%e3%81%99%20%0d%0a%e3%82%b3%e3%83%a1%e3%83%b3%e3%83%88%3a"}},[r("img",{attrs:{src:n(209),width:"120"}})])],1)],1)],1)}),1)],1)],1)],1)},[],!1,null,"f5447210",null);e.default=component.exports}}]);