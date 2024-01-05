<template>
	<view class="jiexibox">
		<Wnavbar :title="'视频解析'" class="navbar-css"></Wnavbar>
		<web-view src="http://tv.tutouguai.cn" class="webview-css" :fullscreen='true' allowfullscreen></web-view>
	</view>
</template>

<script>
	import Wnavbar from "@/pages/componentspages/backNavbar/index.vue"
	export default {
		components: {
			Wnavbar
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.jiexibox{
		height: 100vh;
		width: 100%;
	}
	.navbar-css{
		width: 100%;
		height: 80rpx;
	}
	.webview-css{
		width: 100%;
		height: 90%;
	}
</style>