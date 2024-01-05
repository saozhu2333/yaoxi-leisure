<template>
	<view class="">
		<u-sticky :customNavHeight="0">
			<Wnavbar :title="searchData.title"></Wnavbar>
		</u-sticky>
		<u-loading-page :loading="!bookval"></u-loading-page>
		<view class="video-box-class" v-if="bookval">
			<!-- #ifdef MP-WEIXIN -->
			<view class="textbodybox" width="100%" style="margin-top: 80rpx;">
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="textbodybox" width="100%">
					<!-- #endif -->
					
					<u--text :text="bookval?bookval:''" size='25'></u--text>
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
					fictionId: ''
				},
				bookList: {},
				// bookval: ''
			};
		},
		onLoad(option) {

			this.searchData.chapterId = option.chapterId
			this.searchData.title = option.title
			this.searchData.fictionId = option.id
			this.downbotton.id = option.id
			this.upbotton.id = option.id
			//判断有没有存这个 状态
			if (!this.chapterInfo) {
				this.getBookChaptervuex(this.searchData)
			} else {
				this.showbotton(this.chapterInfo.chapterList)
			}


			this.getsearchBookContentvuex(this.searchData)
		},
		methods: {
			...mapActions({
				getsearchBookContentvuex: 'book/getsearchBookContentfun',
				getBookChaptervuex: 'chapter/getsearchBookChapterfun',
			}),

			...mapMutations({
				resetbookval: 'book/resetbookval',
			}),
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
				this.resetbookval(null)
				let url
				if (val == 1) {
					url =
						`/pageB/BookContent/content?chapterId=${this.upbotton.chapterId}&title=${this.upbotton.title}&id=${this.upbotton.id}`
				} else {
					url =
						`/pageB/BookContent/content?chapterId=${this.downbotton.chapterId}&title=${this.downbotton.title}&id=${this.downbotton.id}`
				}
				uni.redirectTo({
					url: url,
				})
			}
		},
		computed: {
			...mapState({
				chapterInfo: state => state.chapter.chapterInfo, //章节列表
				bookval: state => state.book.bookval
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
			this.resetbookval(null)
		}
	};
</script>

<style scoped>
	.video-box-class {
		width: 650rpx;
		margin-top: 50rpx;
		margin: 0 50rpx;
	}

	/* #ifdef MP-WEIXIN */
	.textbodybox {

		margin-top: 50rpx;
	}

	/* #endif */
</style>