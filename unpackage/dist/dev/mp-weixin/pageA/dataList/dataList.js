(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageA/dataList/dataList"],{247:function(t,e,o){"use strict";(function(t,e){var i=o(4);o(26);i(o(25));var n=i(o(248));t.__webpack_require_UNI_MP_PLUGIN__=o,e(n.default)}).call(this,o(1)["default"],o(2)["createPage"])},248:function(t,e,o){"use strict";o.r(e);var i=o(249),n=o(251);for(var s in n)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o(253);var c,r=o(32),a=Object(r["default"])(n["default"],i["render"],i["staticRenderFns"],!1,null,"18b38658",null,!1,i["components"],c);a.options.__file="pageA/dataList/dataList.vue",e["default"]=a.exports},249:function(t,e,o){"use strict";o.r(e);var i=o(250);o.d(e,"render",(function(){return i["render"]})),o.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),o.d(e,"components",(function(){return i["components"]}))},250:function(t,e,o){"use strict";var i;o.r(e),o.d(e,"render",(function(){return n})),o.d(e,"staticRenderFns",(function(){return c})),o.d(e,"recyclableRender",(function(){return s})),o.d(e,"components",(function(){return i}));try{i={uSticky:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(o.bind(null,390))},uList:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-list/u-list")]).then(o.bind(null,398))},uListItem:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-list-item/u-list-item")]).then(o.bind(null,406))},"u-Image":function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u--image/u--image")]).then(o.bind(null,414))},"u-Text":function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u--text/u--text")]).then(o.bind(null,420))},uLoadmore:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(o.bind(null,426))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.selectType());t._isMounted||(t.e0=function(e,o){var i=arguments[arguments.length-1].currentTarget.dataset,n=i.eventParams||i["event-params"];o=n.item;return t.clickHomeItem(o)}),t.$mp.data=Object.assign({},{$root:{l0:o}})},s=!1,c=[];n._withStripped=!0},251:function(t,e,o){"use strict";o.r(e);var i=o(252),n=o.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},252:function(t,e,o){"use strict";(function(t){var i=o(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o(11)),s=o(159);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){(0,n.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var a=function(){o.e("components/backNavbar/index").then(function(){return resolve(o(434))}.bind(null,o)).catch(o.oe)},u={props:["type","name","title"],components:{Wnavbar:a},data:function(){return{searchData:{option:"",key:"",from:1,size:10},listType:null,status:"loading"}},onLoad:function(t){console.log(t),this.listType=t.type,"book"==t.type&&(this.searchData.option="fictionType",this.searchData.key=t.name,t.title-0&&(this.searchData.option="title"),this.bookgetlistvuex(this.searchData)),"comic"==t.type&&(this.searchData.option="comicType",this.searchData.key=t.name,t.title-0&&(this.searchData.option="title"),this.comicgetlistvuex(this.searchData)),"video"==t.type&&(this.searchData.option="videoType",this.searchData.key=t.name,t.title-0&&(this.searchData.option="title"),this.videogetlistvuex(this.searchData))},methods:r(r(r({},(0,s.mapActions)({bookgetlistvuex:"book/bookgetlist",comicgetlistvuex:"comic/comicgetlist",videogetlistvuex:"video/videogetlist"})),(0,s.mapMutations)({bookresetsearchList:"book/resetsearchList",comicresetsearchList:"comic/resetsearchList",videoresetsearchList:"video/resetsearchList"})),{},{scrolltolower:function(){var t=null;if("book"==this.listType){if(t=this.bookcount,t<=10&&(this.status="nomore"),this.bookList.length+10<=t)this.searchData.from++;else{if(console.log(this.bookList.length+10,t),!(t-this.bookList.length<=9))return void(this.status="nomore");this.searchData.from++}this.bookgetlistvuex(this.searchData)}if("comic"==this.listType){if(t=this.comiccount,t<=10&&(this.status="nomore"),this.comicList.length+10<=t)this.searchData.from++;else{if(console.log(t),!(t-this.comicList.length<=9))return void(this.status="nomore");this.searchData.from++}this.comicgetlistvuex(this.searchData),console.log(this.comicList)}if("video"==this.listType){if(t=this.videocount,t<=10&&(this.status="nomore"),this.videoList.length+10<=t)this.searchData.from++;else{if(!(t-this.videoList.length<=9))return void(this.status="nomore");this.searchData.from++}this.videogetlistvuex(this.searchData)}},clickHomeItem:function(e){var o;"book"==this.listType&&(o="/pageB/chapter/indexChapter?id=".concat(e.fictionId,"&name=").concat(e.title,"&type=").concat(e.type)),"comic"==this.listType&&(o="/pageB/chapter/indexChapter?id=".concat(e.comicId,"&name=").concat(e.title,"&type=").concat(e.type)),"video"==this.listType&&(o="/pageB/chapter/indexChapter?id=".concat(e.videoId,"&name=").concat(e.title,"&type=").concat(e.type)),t.navigateTo({url:o})},selectType:function(){return"book"==this.listType?this.bookList:"comic"==this.listType?this.comicList:this.videoList}}),mounted:function(){},computed:r({},(0,s.mapState)({bookList:function(t){return t.book.searchList},comicList:function(t){return t.comic.searchList},videoList:function(t){return t.video.searchList},bookcount:function(t){return t.book.listcount},comiccount:function(t){return t.comic.listcount},videocount:function(t){return t.video.listcount}})),watch:{bookcount:function(t,e){t<10&&(this.status="nomore")},comiccount:function(t,e){t<10&&(this.status="nomore")},videocount:function(t,e){t<10&&(this.status="nomore")}},destroyed:function(){this.bookresetsearchList(null),this.comicresetsearchList(null),this.videoresetsearchList(null)}};e.default=u}).call(this,o(2)["default"])},253:function(t,e,o){"use strict";o.r(e);var i=o(254),n=o.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},254:function(t,e,o){}},[[247,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pageA/dataList/dataList.js.map