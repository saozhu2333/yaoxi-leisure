<template>
	<view class="wbar-class">
		<u-navbar height='80rpx' :title="title" @leftClick="leftClick" :fixed='false' :placeholder='true' :bgColor="'#FFFFFF'">
		</u-navbar>
	</view>
	
</template>
true
<script>
	export default {
		// props: ['title'],
		props: ['title'],
		data() {
			return {
				// searchBookList: []
				routeData:{
				},

			};
		},
		onLoad(option) {
		},
		methods: {
			leftClick() {
				console.log("点击了");
				uni.navigateBack();
			}
		},
		mounted() {
			// //隐藏返回按钮
			// // #ifdef APP-PLUS
			// let webView = this.$scope.$getAppWebview();
			// webView.setStyle({
			// 	titleNView:{
			// 		autoBackButton:false
			// 	}
			// })
			// // #endif
			// //隐藏返回按钮
			// // #ifdef H5
			// var webH5 = document.getElementsByClassName('uni-page-head-btn')[0];
			// webH5.style.display = 'none';
			// // #endif
		},
		
	};
</script>

	
<style scoped>
	.wbar-class{
		height: 80rpx;
		width: 750rpx;
	}
</style>