(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageB/BookContent/content"],{"2a3a":function(t,e,o){"use strict";o.r(e);var n=o("d1f8"),i=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"34d3":function(t,e,o){"use strict";var n=o("40ea"),i=o.n(n);i.a},"40ea":function(t,e,o){},"45ec":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var n={uSticky:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(o.bind(null,"1c39"))},uLoadingPage:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-loading-page/u-loading-page")]).then(o.bind(null,"b56b"))},"u-Text":function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u--text/u--text")]).then(o.bind(null,"6b95"))},uRow:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-row/u-row")]).then(o.bind(null,"fe3a"))},uCol:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-col/u-col")]).then(o.bind(null,"6014"))},uButton:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-button/u-button")]).then(o.bind(null,"0875"))}},i=function(){var t=this.$createElement;this._self._c},r=[]},"4fe7":function(t,e,o){"use strict";(function(t,e){var n=o("4ea4");o("9a23");n(o("66fd"));var i=n(o("bf81"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(i.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},bf81:function(t,e,o){"use strict";o.r(e);var n=o("45ec"),i=o("2a3a");for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("34d3");var c=o("f0c5"),a=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"365913fa",null,!1,n["a"],void 0);e["default"]=a.exports},d1f8:function(t,e,o){"use strict";(function(t){var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("9523")),r=(o("a97a"),o("26cb"));function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){(0,i.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={components:{Wnavbar:function(){o.e("components/backNavbar/index").then(function(){return resolve(o("0bf2"))}.bind(null,o)).catch(o.oe)}},data:function(){return{upbotton:{show:!1,chapterId:"",title:"",id:""},downbotton:{show:!1,chapterId:"",title:"",id:""},searchData:{chapterId:"",title:"",fictionId:""},bookList:{}}},onLoad:function(t){this.searchData.chapterId=t.chapterId,this.searchData.title=t.title,this.searchData.fictionId=t.id,this.downbotton.id=t.id,this.upbotton.id=t.id,this.chapterInfo?this.showbotton(this.chapterInfo.chapterList):this.getBookChaptervuex(this.searchData),this.getsearchBookContentvuex(this.searchData)},methods:a(a(a({},(0,r.mapActions)({getsearchBookContentvuex:"book/getsearchBookContentfun",getBookChaptervuex:"chapter/getsearchBookChapterfun"})),(0,r.mapMutations)({resetbookval:"book/resetbookval"})),{},{showbotton:function(t){var e=this;t.forEach((function(o,n){var i,r,c,a,u,l;o.chapterId==e.searchData.chapterId&&(e.upbotton.show=!(null===(i=t[n-1])||void 0===i||!i.chapterId),e.upbotton.chapterId=null===(r=t[n-1])||void 0===r?void 0:r.chapterId,e.upbotton.title=null===(c=t[n-1])||void 0===c?void 0:c.title,e.downbotton.show=!(null===(a=t[n+1])||void 0===a||!a.chapterId),e.downbotton.chapterId=null===(u=t[n+1])||void 0===u?void 0:u.chapterId,e.downbotton.title=null===(l=t[n+1])||void 0===l?void 0:l.title)}))},bottonClick:function(e){var o;this.resetbookval(null),o=1==e?"/pageB/BookContent/content?chapterId=".concat(this.upbotton.chapterId,"&title=").concat(this.upbotton.title,"&id=").concat(this.upbotton.id):"/pageB/BookContent/content?chapterId=".concat(this.downbotton.chapterId,"&title=").concat(this.downbotton.title,"&id=").concat(this.downbotton.id),t.redirectTo({url:o})}}),computed:a({},(0,r.mapState)({chapterInfo:function(t){return t.chapter.chapterInfo},bookval:function(t){return t.book.bookval}})),watch:{chapterInfo:{handler:function(t,e){this.showbotton(t.chapterList)},deep:!0}},beforeDestroy:function(){this.resetbookval(null)}};e.default=u}).call(this,o("543d")["default"])}},[["4fe7","common/runtime","common/vendor"]]]);