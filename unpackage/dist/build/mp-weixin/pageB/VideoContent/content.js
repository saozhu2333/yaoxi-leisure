(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageB/VideoContent/content"],{3510:function(e,t,n){},"859e":function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("3e44")),o={components:{Wnavbar:function(){n.e("components/backNavbar/index").then(function(){return resolve(n("0bf2"))}.bind(null,n)).catch(n.oe)}},data:function(){return{query:null,dp:null,searchData:{chapterPath:"",title:""}}},onLoad:function(e){this.searchData.chapterPath=e.chapterPath,this.searchData.title=e.title},created:function(){},methods:{initH5Video:function(){this.dp=new DPlayer({element:this.$refs.player,loop:!1,video:{pic:"",url:this.searchData.chapterPath,type:"customHls",customType:{customHls:function(e,t){var n=new c.default;n.loadSource(e.src),n.attachMedia(e)}}}}),document.querySelector("#dplayer").oncontextmenu=function(){return document.querySelector(".dplayer-menu").style.display="none",document.querySelector(".dplayer-mask").style.display="none",!1},this.dp.play()},videoErrorCallback:function(t){e.showModal({content:t.target.errMsg,showCancel:!1})}},mounted:function(){}};t.default=o}).call(this,n("543d")["default"])},"8b9d":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},c=[]},"9d1e":function(e,t,n){"use strict";n.r(t);var a=n("859e"),c=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=c.a},dd09:function(e,t,n){"use strict";n.r(t);var a=n("8b9d"),c=n("9d1e");for(var o in c)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(o);n("eb01");var r=n("f0c5"),u=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"12ee121c",null,!1,a["a"],void 0);t["default"]=u.exports},eb01:function(e,t,n){"use strict";var a=n("3510"),c=n.n(a);c.a},fec9:function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("9a23");a(n("66fd"));var c=a(n("dd09"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["fec9","common/runtime","common/vendor"]]]);