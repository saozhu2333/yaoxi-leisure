<template>
	<view class="content">
		<downScroll @downLoadFun="loadXHRFun" ref="downscroll">
			<!-- //头部tab -->
			<u-tabs itemStyle="width:19%;height:80rpx" :scrollable="false" :list="list1" @click="clickTabs"></u-tabs>
			<view class="" @click="searchfocus">
				<uni-search-bar placeholder="搜索" :focus='focus' :readonly="true">
				</uni-search-bar>
			</view>
			<!-- //上面分类 -->
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex"
					@click="gridClick(baseListItem)">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<view v-if="loading" class=""
				style="width: 750rpx; height: 100%; display: flex;align-items: center;justify-content: center;">
				<u-loading-icon :vertical="true"></u-loading-icon>
			</view>
			<!-- <u-loading-page ></u-loading-page> -->
			<view v-if="!loading" class="" style="width: 750rpx; height: 100%; ">
				<!-- <u-loading-icon  :vertical="true" ></u-loading-icon> -->
				<!-- 			<uni-card :title="'小说-'+this.booksearchOption.key" extra="查看更多">
				<div style="display: flex; align-items: center; justify-content: flex-start; flex-wrap: wrap;height: 280rpx;">
					<view class="itemBook" v-for="res in searchBookList" :key="res.fictionId">
						<u--image :src="res.cover" radius="10rpx" :fade="true" duration="450" width="110rpx"height="170rpx">
							<view slot="error" style="font-size: 24rpx;">加载失败</view>
						</u--image>
						<text class="uni-body" style="font-size: 20rpx;">{{res.title}}</text>
					</view>
				</div>

				
			</uni-card> -->
				<homeItem :title="'小说-'+booksearchOption.key" :data="searchBookList" type='book'></homeItem>
				<homeItem :title="'漫画-'+comicsearchOption.key" :data="searchComicList" type='comic'></homeItem>
				<homeItem :title="'视频-'+videosearchOption.key" :data="searchVideoList" type='video'></homeItem>
			</view>
		</downScroll>
	</view>
</template>

<script>
	import {
		uniSearchBar
	} from "@/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"
	import {
		uniCard
	} from "@/uni_modules/uni-card/components/uni-card/uni-card.vue"
	import {
		getsearchBook,
		getsearchComic,
		getsearchVideo
	} from "@/http/api.js"
	import homeItem from "@/components/homeItemTabs/homeItemTabs.vue"
	import {
		mapActions,
		mapGetters
	} from 'vuex';
	import downScroll from "@/components/downScroll/downScroll.vue"
	// import AsyncTaskController from "@/utils/XHR_ctrl.js"
	// import {Async_query} from "@/utils/Promise_all.js"
	export default {
		data() {
			return {
				focus: false,
				list1: [{
					name: '推荐'
				}, {
					name: '小说'
				}, {
					name: '动漫'
				}, {
					name: '电影'
				}],
				loading: true,
				baseList: [{
						name: 'home',
						title: '专区'
					},
					{
						name: 'bookmark',
						title: '精品'
					},
					{
						name: 'search',
						title: '搜索'
					},
					{
						name: 'car-fill',
						title: '解析'
					}
				],
				//首页的书籍搜索配置
				booksearchOption: {
					// 标题：title ， 作者 ：author ，分类：fictionType
					option: 'fictionType',
					key: '玄幻奇幻',
					from: 1,
					size: 10
				},
				//首页的动漫搜索配置
				comicsearchOption: {
					// 标题：title ， 作者 ：author ，分类：fictionType
					option: 'comicType',
					key: '搞笑',
					from: 1,
					size: 10
				},
				videosearchOption: {
					// 标题：title ， 作者 ：author ，分类：fictionType
					option: 'videoType',
					key: '动漫电影',
					from: 1,
					size: 10
				},
				// searchBookList: [],
				// searchComicList: [],
				// searchVideoList: []
			};
		},
		components: {
			homeItem,
			downScroll
		},
		onLoad() {


		},
		methods: {
			...mapActions({
				bookgetlistvuex: 'book/homebookgetlist',
				comicgetlistvuex: 'comic/homecomicgetlist',
				videogetlistvuex: 'video/homevideogetlist',
			}),
			clickTabs(item) {
				console.log(item);
			},
			searchfocus(item) {

				uni.switchTab({
					url: '/pages/tabbar/tabbar-4/tabbar-4'
				})
				// this.focus=false
			},
			//下拉刷新执行
			loadXHRFun(mescroll) {
				// let xhrCtrl = new AsyncTaskController(1)
				// xhrCtrl.addTask(this.bookgetlistvuex(this.booksearchOption))
				// xhrCtrl.addTask(this.comicgetlistvuex(this.comicsearchOption))
				// xhrCtrl.addTask(this.videogetlistvuex(this.videosearchOption))
				// xhrCtrl.addTask(...[this.bookgetlistvuex(this.booksearchOption), this.comicgetlistvuex(this.comicsearchOption), this.videogetlistvuex(this.videosearchOption)])
				// [this.bookgetlistvuex(this.booksearchOption), this.comicgetlistvuex(this.comicsearchOption), this.videogetlistvuex(this.videosearchOption)].forEach(res=>{
				// 	console.log(res);
				// 	xhrCtrl.addTask(res)
				// })
				let that = this
				// let a = Async_query(1,3,[this.bookgetlistvuex(this.booksearchOption), this.comicgetlistvuex(this.comicsearchOption), this.videogetlistvuex(this.videosearchOption)])
				// a.data.then(res=>{
				// 	console.log(res);
				// })
				// let a = exphandlePromiseDone([this.bookgetlistvuex(this.booksearchOption), this.comicgetlistvuex(this.comicsearchOption), this.videogetlistvuex(this.videosearchOption)])
				// console.log(a);
				Promise.all([this.bookgetlistvuex(this.booksearchOption), this.comicgetlistvuex(this.comicsearchOption), this.videogetlistvuex(this.videosearchOption)
				]).then(res => {
					console.log(res);
					this.$refs['downscroll'].panDuanFun(res,mescroll)
					// return res
				}).catch(err=>{
					this.$refs['downscroll'].panDuanFun(err,mescroll)
					// return err
				})
				this.loading = false
			},
			
			
			//点击grid
			gridClick(val) {
				console.log('功能暂不可用');
				return
				// if(val.title=='解析'){
				// 	let url=`/pages/jiexi/jiexi`
				// 	uni.navigateTo({
				// 		url: url,
				// 	});
				// }
			}
		},
		computed: {
			...mapGetters({
				searchBookList: 'book/booklist', //这就是你所定义的文件夹的名称
				searchComicList: 'comic/comiclist', //这就是你所定义的文件夹的名称
				searchVideoList: 'video/videolist', //这就是你所定义的文件夹的名称
			}),

		},
		mounted() {
			setTimeout(() => {
				this.loading = false
			}, 200)
			// Promise.all([this.bookgetlistvuex(this.booksearchOption), this.comicgetlistvuex(this.comicsearchOption), this
			// 	.videogetlistvuex(this.videosearchOption)
			// ]).then(res => {
			// 	console.log(res, "ddsfsf");
			// })




		}
	};
</script>

<style scoped>
	.content {
		text-align: center;
		/* height: 400upx; */
	}
</style>