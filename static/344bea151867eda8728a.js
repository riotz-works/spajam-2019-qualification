(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(t,e,r){"use strict";r.r(e);var n=r(1),c=r(24),o=n.default.extend({computed:{newsSources:function(){return c.State.newsSources},userId:function(){return c.State.coreApiUser.userId},userName:function(){return c.State.firebaseUser.displayName}},data:function(){return{}}}),l=r(6),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-container",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("p",[t._v("User ID: "+t._s(t.userId))]),t._v(" "),r("p",[t._v("User name: "+t._s(t.userName))])])],1),t._v(" "),r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},t._l(t.newsSources,function(e){return r("v-card",{key:e.newsSourceId,staticClass:"mx-auto my-3",attrs:{color:"#26c6da",dark:"","max-width":"400"}},[e.title?r("v-card-title",[r("v-icon",{attrs:{large:"",left:""}},[t._v("\n              fiber_new\n            ")]),t._v(" "),r("span",{staticClass:"font-weight-light"},[t._v(t._s(e.title))])],1):t._e(),t._v(" "),r("v-card-text",{staticClass:"subheadline font-weight-bold"},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)}),1)],1)],1)],1)},[],!1,null,"70af05a6",null);e.default=component.exports}}]);