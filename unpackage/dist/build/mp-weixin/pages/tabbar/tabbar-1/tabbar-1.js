(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/tabbar-1"],{1135:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"9bfb"))}},o=function(){var e=this.$createElement;this._self._c},r=[]},"3cd5":function(e,t,n){"use strict";n.r(t);var i=n("3d50"),o=n("fe97");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("c3a3");var c=n("f0c5"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"23ce510e",null,!1,i["a"],void 0);t["default"]=a.exports},"3d50":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={downScroll:function(){return n.e("components/downScroll/downScroll").then(n.bind(null,"2b87"))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"4f9b"))},uniSearchBar:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-search-bar/uni-search-bar")]).then(n.bind(null,"aa44"))},uGrid:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-grid/u-grid")]).then(n.bind(null,"0d4f"))},uGridItem:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-grid-item/u-grid-item")]).then(n.bind(null,"f09b"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"14ff"))},uLoadingIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(n.bind(null,"0320"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.baseList,(function(t,n){var i=e.__get_orig(t);return{$orig:i,a0:{paddingTop:"20rpx"}}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},"3eae":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;this._self._c},o=[]},"61f5":function(e,t,n){"use strict";n.r(t);var i=n("3eae"),o=n("e1fc");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("c522");var c=n("f0c5"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=a.exports},6760:function(e,t,n){},9640:function(e,t,n){"use strict";n.r(t);var i=n("f877"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"99c8":function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("9523")),r=(n("bac8"),n("61f5"),n("a97a"),n("26cb"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={data:function(){return{focus:!1,list1:[{name:"推荐"},{name:"小说"},{name:"动漫"},{name:"电影"}],loading:!0,baseList:[{name:"home",title:"专区"},{name:"bookmark",title:"精品"},{name:"search",title:"搜索"},{name:"car-fill",title:"解析"}],booksearchOption:{option:"fictionType",key:"玄幻奇幻",from:1,size:10},comicsearchOption:{option:"comicType",key:"搞笑",from:1,size:10},videosearchOption:{option:"videoType",key:"动漫电影",from:1,size:10}}},components:{homeItem:function(){n.e("components/homeItemTabs/homeItemTabs").then(function(){return resolve(n("dad7"))}.bind(null,n)).catch(n.oe)},downScroll:function(){n.e("components/downScroll/downScroll").then(function(){return resolve(n("2b87"))}.bind(null,n)).catch(n.oe)}},onLoad:function(){},methods:a(a({},(0,r.mapActions)({bookgetlistvuex:"book/homebookgetlist",comicgetlistvuex:"comic/homecomicgetlist",videogetlistvuex:"video/homevideogetlist"})),{},{clickTabs:function(e){console.log(e)},searchfocus:function(t){e.switchTab({url:"/pages/tabbar/tabbar-4/tabbar-4"})},loadXHRFun:function(e){var t=this;Promise.all([this.bookgetlistvuex(this.booksearchOption),this.comicgetlistvuex(this.comicsearchOption),this.videogetlistvuex(this.videosearchOption)]).then((function(n){t.$refs["downscroll"].panDuanFun(n,e)})).catch((function(n){t.$refs["downscroll"].panDuanFun(n,e)})),this.loading=!1},gridClick:function(e){console.log("功能暂不可用")}}),computed:a({},(0,r.mapGetters)({searchBookList:"book/booklist",searchComicList:"comic/comiclist",searchVideoList:"video/videolist"})),mounted:function(){var e=this;setTimeout((function(){e.loading=!1}),200)}};t.default=u}).call(this,n("543d")["default"])},"9ae1":function(e,t,n){"use strict";var i=n("e6da"),o=n.n(i);o.a},"9c0b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};t.default=i},a053:function(e,t,n){"use strict";(function(e,t){var i=n("4ea4");n("9a23");i(n("66fd"));var o=i(n("3cd5"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},a2d1:function(e,t,n){},bac8:function(e,t,n){"use strict";n.r(t);var i=n("1135"),o=n("9640");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("9ae1");var c=n("f0c5"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=a.exports},c3a3:function(e,t,n){"use strict";var i=n("6760"),o=n.n(i);o.a},c522:function(e,t,n){"use strict";var i=n("a2d1"),o=n.n(i);o.a},e1fc:function(e,t,n){"use strict";n.r(t);var i=n("9c0b"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},e6da:function(e,t,n){},f877:function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("37dc"),r=i(n("448d")),c=(0,o.initVueI18n)(r.default),a=c.t,u={name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){return{show:!1,showSync:!1,searchVal:""}},computed:{cancelTextI18n:function(){return this.cancelText||a("uni-search-bar.cancel")},placeholderText:function(){return this.placeholder||a("uni-search-bar.placeholder")}},watch:{value:{immediate:!0,handler:function(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler:function(e){var t=this;if(e){if(this.readonly)return;this.show=!0,this.$nextTick((function(){t.showSync=!0}))}}},searchVal:function(e,t){this.$emit("input",e)}},methods:{searchClick:function(){var e=this;this.readonly||this.show||(this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel:function(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,e.hideKeyboard())},confirm:function(){e.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})},blur:function(){e.hideKeyboard(),this.$emit("blur",{value:this.searchVal})},emitFocus:function(e){this.$emit("focus",e.detail)}}};t.default=u}).call(this,n("543d")["default"])},fe97:function(e,t,n){"use strict";n.r(t);var i=n("99c8"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a}},[["a053","common/runtime","common/vendor"]]]);