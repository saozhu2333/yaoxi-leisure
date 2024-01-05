<template>
	<view class="">
		<u-sticky :customNavHeight="0"><Wnavbar :title="searchData.title"></Wnavbar></u-sticky>
		<u-loading-page :loading="!ComicVal"></u-loading-page>
		<view class="video-box-class" v-if="ComicVal">
			<view class="" width="100%">
				<!-- <u--text :text="ComicVal?ComicVal:''" size='25'></u--text> -->
				<!-- <u--image v-for="(item,index) in ComicVal" :showLoading="true" :src="item" width="750rpx" mode="widthFix" lazyLoad :key='index'></u--image> -->
				<scroll-view scroll-y="true" class="scroll-Y" @scrolltoupper="upper" >
					<image style="width: 100%;" v-for="(item,index) in onloadComicValImg" lazy-load :lazy-load-margin="0" mode="widthFix" :src="item"
						:key='index' @load="getImg" @error="errImg"></image>
						<u-loadmore :status="loadingStatus?'loading':'nomore'" loadingText="等一等,本章还在加载." nomoreText="没有更多了,请点击下一章."/>
				</scroll-view>
			</view>
			<u-row customStyle="margin: 50rpx 0 50rpx 0">
				<u-col span="2">
				</u-col>
				<u-col span="3">
					<view v-show='upbotton.show'>
						<u-button type="primary" size="small" text="上一章" @click="bottonClick(1)"></u-button>
					</view>
				</u-col>
				<u-col span="2">
				</u-col>
				<u-col span="3">
					<view v-show='downbotton.show'>
						<u-button type="primary" size="small" text="下一章" @click="bottonClick(2)"></u-button>
					</view>
				</u-col>
				<u-col span="2">
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	import Wnavbar from "@/components/backNavbar/index.vue"
	import {
		getsearchBookChapter,
		getsearchBookContent
	} from "@/http/api.js"
	import {
		mapActions,
		mapGetters,
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		// props:['data','title','type'],
		components: {
			Wnavbar
		},
		data() {
			return {
				upbotton: {
					show: false,
					chapterId: '',
					title: '',
					id: ''
				},
				downbotton: {
					show: false,
					chapterId: '',
					title: '',
					id: ''
				},
				searchData: {
					chapterId: '',
					title: '',
					cartoonId: ''
				},
				bookList: {},
				// bookval: ''
				loadingStatus:true
			};
		},
		onLoad(option) {

			this.searchData.chapterId = option.chapterId
			this.searchData.title = option.title
			this.searchData.cartoonId = option.id
			this.downbotton.id = option.id
			this.upbotton.id = option.id
			//判断有没有存这个 状态
			if (!this.chapterInfo) {
				this.getComicChaptervuex(this.searchData)
			} else {
				this.showbotton(this.chapterInfo.chapterList)
			}


			this.getsearchComicContentvuex(this.searchData)
		},
		methods: {
			...mapActions({
				getsearchComicContentvuex: 'comic/getsearchComicContentfun',
				getComicChaptervuex: 'chapter/getsearchComicChapterfun',
			}),

			...mapMutations({
				resetComicval: 'comic/resetComicval',
				changeOnloadComicValImg: 'comic/changeOnloadComicValImg',
			}),
			getImg(){
				if(this.ComicVal.length<=0){
					this.loadingStatus=false
				}
				this.changeOnloadComicValImg()
			},
			errImg(){
				uni.showToast({
					title: '该图片加载失败！',
					icon: 'none',
				});
				if(this.ComicVal.length<=0){
					this.loadingStatus=false
				}
				this.changeOnloadComicValImg()
				
			},
			showbotton(val) {
				val.forEach((res, index) => {
					if (res.chapterId == this.searchData.chapterId) {
						this.upbotton.show = val[index - 1]?.chapterId ? true : false
						this.upbotton.chapterId = val[index - 1]?.chapterId
						this.upbotton.title = val[index - 1]?.title
						this.downbotton.show = val[index + 1]?.chapterId ? true : false
						this.downbotton.chapterId = val[index + 1]?.chapterId
						this.downbotton.title = val[index + 1]?.title

					}
				})
			},
			bottonClick(val) {
				this.resetComicval(null)
				let url
				if (val == 1) {
					url =
						`/pageB/comicContent/content?chapterId=${this.upbotton.chapterId}&title=${this.upbotton.title}&id=${this.upbotton.id}`
				} else {
					url =
						`/pageB/comicContent/content?chapterId=${this.downbotton.chapterId}&title=${this.downbotton.title}&id=${this.downbotton.id}`
				}
				console.log(url);
				uni.redirectTo({
					url: url,
				})
			}
		},
		computed: {
			...mapState({
				chapterInfo: state => state.chapter.chapterInfo, //章节列表
				ComicVal: state => state.comic.ComicVal,
				onloadComicValImg: state => state.comic.onloadComicValImg,
			})
		},

		watch: {
			chapterInfo: {
				handler(newValue, oldVal) {
					this.showbotton(newValue.chapterList)
				},
				deep: true // 深度监听
			}
		},
		beforeDestroy() {
			this.resetComicval(null)
		}
	};
</script>

<style scoped>
	.video-box-class {
		width: 650rpx;
		margin-top: 50rpx;
		margin: 0 50rpx;
	}
</style>
