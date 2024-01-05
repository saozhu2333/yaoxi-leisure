<template>
	<view class="">
		
		<downScroll @downLoadFun="loadXHRFun" ref="downscroll">
			<Wnavbar :title="'章节'"></Wnavbar>
			<u-loading-page :loading="!chapterInfo"></u-loading-page>
			<view class="Chapter-class-box">
				<view class="cover-class" v-if="chapterInfo">
					<h3 class="title-class">{{routeData.name}}</h3>
					<u--image :src="chapterInfo?chapterInfo.cover:''" radius="10rpx" :fade="true" duration="450"
						width="220rpx" height="340rpx">
						<view slot="error" style="font-size: 24rpx;">加载失败</view>
					</u--image>

					<view class="content-blurb">
						<u-row customStyle="margin-bottom: 10px">
							<u-col span="2">
								<view class="demo-layout bg-purple-light">作者：</view>
							</u-col>
							<u-col span="10">
								<view class="demo-layout bg-purple">{{chapterInfo?chapterInfo.author:''}}</view>
							</u-col>
						</u-row>
						<u-row customStyle="margin-bottom: 10px">
							<u-col span="2">
								<view class="demo-layout bg-purple-light">标签：</view>
							</u-col>
							<u-col span="10">
								<view class="demo-layout bg-purple">
									<span style="max-width: 100rpx; display: flex; ">
										<u-tag :text="item"
											v-for="(item,index) in chapterInfo?chapterInfo.typeList.split(','):[]"
											:key='index' plain size="mini" type="warning"></u-tag>
									</span>
								</view>
							</u-col>
						</u-row>
						<u-row customStyle="margin-bottom: 10px">
							<u-col span="2">
								<view class="demo-layout bg-purple-light">简介：</view>
							</u-col>
							<u-col span="10">
								<view class="demo-layout bg-purple">{{chapterInfo?chapterInfo.descs:''}}</view>
							</u-col>
						</u-row>


					</view>
					<view class="select-chapter-botton">
						<u-button type="primary" :plain="true" text="选择目录" @click="clickShowfun"></u-button>
					</view>

				</view>
			</view>

			<nWpopup ref="popup" :type='routeData.type' :listData='chapterInfo?chapterInfo.chapterList:[]'
				:id='searchOption' :name="routeData.name"></nWpopup>
		</downScroll>
	</view>

</template>

<script>
	import {
		getsearchBookChapter,
		getsearchComicChapter,
		getsearchVideoChapter
	} from "@/http/api.js"
	import Wnavbar from "@/components/backNavbar/index.vue"
	// import Wnpopup from "@/pages/components/Wpopup/wpopup.vue"
	import nWpopup from "@/components/Wpopup/nwpopup.nvue"
	import {
		mapActions,
		mapGetters,
		mapState
	} from 'vuex';
	import downScroll from "@/components/downScroll/downScroll.vue"
	export default {
		// props: ['title'],
		components: {
			Wnavbar,
			// Wnpopup,
			nWpopup,
			downScroll
		},
		// #ifdef MP-WEIXIN
		provide(){
		    return{
		     wxid:this.searchOption
		    }
		  },
		// #endif
		data() {
			return {
				// searchBookList: []
				routeData: {
					id: '',
					name: '',
					type: ''
				},
				searchOption: {
					fictionId: '',
					cartoonId: '',
					videoId: '',
				},
				//获取到的结果
				// chapterInfo:{},
				// chapterList:[]
			};
		},

		onLoad(option) {

			this.routeData.id = option.id
			this.routeData.name = option.name
			this.routeData.type = option.type
			if (option.type == 'book') {
				this.searchOption.fictionId = option.id
				this.getBookChaptervuex(this.searchOption)
			}
			if (option.type == 'comic') {
				this.searchOption.cartoonId = option.id
				this.getComicgetlistvuex(this.searchOption)
			}
			if (option.type == 'video') {
				this.searchOption.videoId = option.id
				this.getVideogetlistvuex(this.searchOption)
			}

		},
		methods: {
			...mapActions({
				getBookChaptervuex: 'chapter/getsearchBookChapterfun',
				getComicgetlistvuex: 'chapter/getsearchComicChapterfun',
				getVideogetlistvuex: 'chapter/getsearchVideoChapterfun',
				// videogetlistvuex: 'video/videogetlist',
			}),
			loadXHRFun(mescroll) {
				let data = []
				if (this.routeData.type == 'book') {
					data = [this.getBookChaptervuex(this.searchOption)]

				}
				if (this.routeData.type == 'comic') {
					data = [this.getComicgetlistvuex(this.searchOption)]

				}
				if (this.routeData.type == 'video') {
					data = [this.getVideogetlistvuex(this.searchOption)]

				}
				Promise.all(data).then(res => {
					this.$refs['downscroll'].panDuanFun(res, mescroll)
					// return res
				}).catch(err => {
					this.$refs['downscroll'].panDuanFun(err, mescroll)
					// return err
				})
			},
			// async getsearchBookChapterfun() {
			// 	let result = await getsearchBookChapter(this.searchOption)
			// 	this.searchVideoList = result.data
			// 	this.searchVideoList.typeList=result.data.fictionType
			// 	this.chapterList=result.data.chapterList
			// 	console.log(this.searchVideoList, "book");
			// },
			// async getsearchComicChapterfun() {
			// 	let result = await getsearchComicChapter(this.searchOption)
			// 	this.searchVideoList = result.data
			// 	this.searchVideoList.typeList=result.data.comicType
			// 	this.chapterList=result.data.chapterList
			// 	console.log(this.searchVideoList, "ffffff");
			// },
			// async getsearchVideoChapterfun() {
			// 	let result = await getsearchVideoChapter(this.searchOption)
			// 	this.searchVideoList = result.data
			// 	this.searchVideoList.typeList=result.data.videoType
			// 	this.chapterList=result.data.chapterList
			// 	console.log(this.searchVideoList, "ffffff");
			// },

			clickShowfun() {
				this.$refs['popup'].open()
			}
		},
		computed: {
			...mapState({
				chapterInfo: state => state.chapter.chapterInfo, //这就是你所定义的文件夹的名称//这就是你所定义的文件夹的名称
			})
		},
		mounted() {

		},
		onUnload() {
			this.$store.state.chapter.chapterInfo = null
		}
	};
</script>

<style scoped>
	.cover-class {
		/* height: 750rpx; */
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 0rpx;
	}

	.title-class {
		margin-bottom: 20rpx;
	}

	.content-blurb {
		margin-top: 50rpx;
	}

	.select-chapter-botton {
		padding: 0 50rpx 0 50rpx;
		width: 300rpx;
	}

	.Chapter-class-box {
		padding: 0 50rpx;
		margin-top: 100rpx;
	}
</style>
