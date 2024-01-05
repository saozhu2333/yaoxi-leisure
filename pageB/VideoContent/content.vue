<template>
	<view class="">
		<Wnavbar :title="searchData.title"></Wnavbar>
		<view class="video-box-class moo-css">
			<!-- #ifndef APP-PLUS-NVUE || APP-NVUE || APP-PLUS || MP-WEIXIN-->
			<div id="dplayer" ref="player" class="dplayer video-box"></div>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS-NVUE || APP-NVUE || APP-PLUS || MP-WEIXIN -->
			<video id="myVideo" class="video-box app-video-css" :src="searchData.chapterPath" @error="videoErrorCallback" controls autoplay
				is-live></video>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import Wnavbar from "@/components/backNavbar/index.vue"
	import Hls from "hls.js";
	// #ifndef APP-PLUS-NVUE || APP-NVUE || APP-PLUS || MP-WEIXIN
	import 'aliyun-aliplayer'
	import 'aliyun-aliplayer/dist/skins/default/aliplayer-min.css'
    // #endif
	export default {
		// props:['data','title','type'],
		components: {
			Wnavbar
		},
		data() {
			return {
				//节点信息
				query: null,
				dp: null,
				searchData: {
					chapterPath: '',
					title: ''
				}
			};
		},
		onLoad(option) {
			this.searchData.chapterPath = option.chapterPath
			this.searchData.title = option.title
		},
		created() {

		},
		methods: {

			initH5Video() {
				this.dp = new DPlayer({
					element: this.$refs.player,
					loop: false,
					video: {
						pic: '', // 封面
						url: this.searchData.chapterPath,
						type: "customHls",
						customType: {
							customHls: function(video, player) {
								const hls = new Hls();
								hls.loadSource(video.src);
								hls.attachMedia(video);
							},
						},
					},
				});

				document.querySelector("#dplayer").oncontextmenu = () => {
					document.querySelector(".dplayer-menu").style.display = "none";
					document.querySelector(".dplayer-mask").style.display = "none";
					return false;
				};
				//开始播放
				this.dp.play();
			},

			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			// #ifndef APP-PLUS-NVUE || APP-NVUE || APP-PLUS || MP-WEIXIN
			initAliVideo() {

				this.dp = new Aliplayer({
					"id": "dplayer",
					"source": this.searchData.chapterPath,
					"autoplay": true,
					"isLive": false,
					"rePlay": false,
					"playsinline": true,
					"preload": true,
					"controlBarVisibility": "hover",
					"useH5Prism": true
				}, function(player) {
					player.play();
				});

			},
			// #endif 
		},
		mounted() {

			// #ifndef APP-PLUS-NVUE || APP-NVUE || APP-PLUS || MP-WEIXIN
			this.initAliVideo();
			// #endif 
		}
	};
</script>

<style scoped>
	/* @import url('../../node_modules/aliyun-aliplayer/dist/skins/default/aliplayer-min.css'); */
	.video-box {
		width: 100%;
		max-height: 500rpx;
	}
	.app-video-css{
		margin-top: 100rpx;
	}
	::v-deep .dplayer-menu,
	.dplayer-mask {
		display: none !important;
	}
</style>
