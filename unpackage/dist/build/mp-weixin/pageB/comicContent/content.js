(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageB/comicContent/content"],{"3c71":function(t,o,n){},4824:function(t,o,n){"use strict";(function(t,o){var e=n("4ea4");n("9a23");e(n("66fd"));var c=e(n("77c8"));t.__webpack_require_UNI_MP_PLUGIN__=n,o(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"4fb9":function(t,o,n){"use strict";n.d(o,"b",(function(){return c})),n.d(o,"c",(function(){return i})),n.d(o,"a",(function(){return e}));var e={uSticky:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(n.bind(null,"1c39"))},uLoadingPage:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-page/u-loading-page")]).then(n.bind(null,"b56b"))},uLoadmore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(n.bind(null,"7f08"))},uRow:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-row/u-row")]).then(n.bind(null,"fe3a"))},uCol:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-col/u-col")]).then(n.bind(null,"6014"))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"0875"))}},c=function(){var t=this.$createElement;this._self._c},i=[]},"77c8":function(t,o,n){"use strict";n.r(o);var e=n("4fb9"),c=n("be20");for(var i in c)["default"].indexOf(i)<0&&function(t){n.d(o,t,(function(){return c[t]}))}(i);n("ef51");var a=n("f0c5"),r=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,"2b7201c4",null,!1,e["a"],void 0);o["default"]=r.exports},a5b7:function(t,o,n){"use strict";(function(t){var e=n("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=e(n("9523")),i=(n("a97a"),n("26cb"));function a(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),n.push.apply(n,e)}return n}function r(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){(0,c.default)(t,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))}))}return t}var u={components:{Wnavbar:function(){n.e("components/backNavbar/index").then(function(){return resolve(n("0bf2"))}.bind(null,n)).catch(n.oe)}},data:function(){return{upbotton:{show:!1,chapterId:"",title:"",id:""},downbotton:{show:!1,chapterId:"",title:"",id:""},searchData:{chapterId:"",title:"",cartoonId:""},bookList:{},loadingStatus:!0}},onLoad:function(t){this.searchData.chapterId=t.chapterId,this.searchData.title=t.title,this.searchData.cartoonId=t.id,this.downbotton.id=t.id,this.upbotton.id=t.id,this.chapterInfo?this.showbotton(this.chapterInfo.chapterList):this.getComicChaptervuex(this.searchData),this.getsearchComicContentvuex(this.searchData)},methods:r(r(r({},(0,i.mapActions)({getsearchComicContentvuex:"comic/getsearchComicContentfun",getComicChaptervuex:"chapter/getsearchComicChapterfun"})),(0,i.mapMutations)({resetComicval:"comic/resetComicval",changeOnloadComicValImg:"comic/changeOnloadComicValImg"})),{},{getImg:function(){this.ComicVal.length<=0&&(this.loadingStatus=!1),this.changeOnloadComicValImg()},errImg:function(){t.showToast({title:"该图片加载失败！",icon:"none"}),this.ComicVal.length<=0&&(this.loadingStatus=!1),this.changeOnloadComicValImg()},showbotton:function(t){var o=this;t.forEach((function(n,e){var c,i,a,r,u,l;n.chapterId==o.searchData.chapterId&&(o.upbotton.show=!(null===(c=t[e-1])||void 0===c||!c.chapterId),o.upbotton.chapterId=null===(i=t[e-1])||void 0===i?void 0:i.chapterId,o.upbotton.title=null===(a=t[e-1])||void 0===a?void 0:a.title,o.downbotton.show=!(null===(r=t[e+1])||void 0===r||!r.chapterId),o.downbotton.chapterId=null===(u=t[e+1])||void 0===u?void 0:u.chapterId,o.downbotton.title=null===(l=t[e+1])||void 0===l?void 0:l.title)}))},bottonClick:function(o){var n;this.resetComicval(null),n=1==o?"/pageB/comicContent/content?chapterId=".concat(this.upbotton.chapterId,"&title=").concat(this.upbotton.title,"&id=").concat(this.upbotton.id):"/pageB/comicContent/content?chapterId=".concat(this.downbotton.chapterId,"&title=").concat(this.downbotton.title,"&id=").concat(this.downbotton.id),console.log(n),t.redirectTo({url:n})}}),computed:r({},(0,i.mapState)({chapterInfo:function(t){return t.chapter.chapterInfo},ComicVal:function(t){return t.comic.ComicVal},onloadComicValImg:function(t){return t.comic.onloadComicValImg}})),watch:{chapterInfo:{handler:function(t,o){this.showbotton(t.chapterList)},deep:!0}},beforeDestroy:function(){this.resetComicval(null)}};o.default=u}).call(this,n("543d")["default"])},be20:function(t,o,n){"use strict";n.r(o);var e=n("a5b7"),c=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){n.d(o,t,(function(){return e[t]}))}(i);o["default"]=c.a},ef51:function(t,o,n){"use strict";var e=n("3c71"),c=n.n(e);c.a}},[["4824","common/runtime","common/vendor"]]]);