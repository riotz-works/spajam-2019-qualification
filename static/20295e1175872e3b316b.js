(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{205:function(t,e,n){"use strict";var o=n(79),r=n.n(o).a.create({baseURL:"https://7ciyp38wlb.execute-api.ap-northeast-1.amazonaws.com/dev"});e.a=r},206:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6686a315",content,!0,{sourceMap:!1})},207:function(t,e,n){"use strict";var o=n(206);n.n(o).a},208:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,"section[data-v-63c18a66]{height:85%}.top-main-logo[data-v-63c18a66]{width:100%;border:1px solid #000}.top-button-transparent[data-v-63c18a66]{background-color:#4e2b2b!important;opacity:.9}.x-v-alert-info[data-v-63c18a66]{font-size:smaller;background-color:hsla(0,0%,86.3%,.8)!important}",""])},214:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(78),c=n(205),l=n(40),d=n(24),v=o.default.extend({data:function(){return{appVersion:"0.0.1",isLoading:!0}},layout:"top",methods:{getRedirectResult:function(){var t=this;l.a.auth().getRedirectResult().then(function(e){console.log("getRedirectResult",e);var n=l.a.auth().currentUser;n&&n.displayName?(d.State.firebaseUser=n,t.signupCoreApi(e)):t.isLoading=!1}).catch(function(e){console.log("getRedirectResult failed.",e),t.isLoading=!1})},signupCoreApi:function(t){var e=this;c.a.post("/signup",{id:t.credential.providerId,userId:t.user.uid,username:t.additionalUserInfo.profile.screen_name,token:{access:t.credential.accessToken,refresh:t.credential.refreshToken}}).then(function(t){console.log("coreApi /signup response",t),d.State.coreApiUser=t.data,e.toMyNewsPage()})},signinFacebook:function(){var t=new l.a.auth.FacebookAuthProvider;l.a.auth().signInWithRedirect(t)},signinTwitter:function(){l.a.auth().signOut().then(function(){var t=new l.a.auth.TwitterAuthProvider;l.a.auth().signInWithRedirect(t)})}},mixins:[r.a],mounted:function(){l.a.auth().currentUser?this.toMyNewsPage():this.getRedirectResult()}}),h=(n(207),n(6)),component=Object(h.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",{staticClass:"pt-0 mt-0 pb-1",attrs:{"fill-height":""}},[t.isLoading?n("v-layout",{staticClass:"mt-0",attrs:{wrap:"","align-end":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("v-progress-circular",{attrs:{indeterminate:"",size:70,color:"pink"}})],1)],1):t._e(),t._v(" "),t.isLoading?t._e():n("v-layout",{staticClass:"mt-5",attrs:{wrap:"","align-end":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"mb-4 top-button-transparent",attrs:{block:"",dark:""},on:{click:t.signinTwitter}},[t._v("\n          Twitterでサインインする\n        ")]),t._v(" "),n("v-btn",{staticClass:"mt-4 mb-4 top-button-transparent",attrs:{block:"",dark:""},on:{click:t.signinFacebook}},[t._v("\n          Facebookでサインインする\n        ")]),t._v(" "),n("v-alert",{staticClass:"pt-2 x-v-alert-info",attrs:{light:"",value:!0,color:"black",icon:"info",outline:""}},[t._v("\n          このアプリはiOS11.3以上／Android7.0以上に最適化されています。正しく動作しない場合、WEB画面のままでもご利用いただけます。PCの場合、Google Chrome または Safariをご利用ください。Internet Exprolerはサポートされません。(v"+t._s(t.appVersion)+")\n        ")])],1)],1)],1)],1)},[],!1,null,"63c18a66",null);e.default=component.exports}}]);