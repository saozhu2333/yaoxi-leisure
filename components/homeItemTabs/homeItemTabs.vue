<template>
	<uni-card :title="title" extra="查看更多">
		<view style="display: flex; align-items: center; justify-content: flex-start; flex-wrap: wrap;height: 280rpx; width: 750rpx;">
			<!-- #ifdef MP-WEIXIN -->
			<view class="itemBook" v-for="(res,index) in data" :key="index" @click="clickHomeItem(res)">		
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view class="itemBook" v-for="(res,index) in data" :key="selectType(res)" @click="clickHomeItem(res)">			
			<!-- #endif -->
				<u--image :src="res.cover" radius="10rpx" :fade="true" duration="450" width="110rpx" height="170rpx">
					<view slot="error" style="font-size: 24rpx;">加载失败</view>
				</u--image>
				<text class="uni-body" style="font-size: 20rpx;">{{res.title}}</text>
			</view>
		</view>
	</uni-card>
</template>

<script>
	import {
		UniCard
	} from "@/components/uni-card/uni-card.vue"
	export default {
		props:['data','title','type'],
		data() {
			return {
				// searchBookList: []
			};
		},
		components: {
			//处理小程序加载报错
			// #ifdef MP-WEIXIN
			UniCard
			// #endif
		},
		onLoad() {


		},
		methods: {
		clickHomeItem(val){
			let url
			if(this.type=='book'){
				url=`/pageB/chapter/indexChapter?id=${val.fictionId}&name=${val.title}&type=${val.type}`
			}
			if(this.type=='comic'){
				url=`/pageB/chapter/indexChapter?id=${val.comicId}&name=${val.title}&type=${val.type}`
			}
			if(this.type=='video'){
				url=`/pageB/chapter/indexChapter?id=${val.videoId}&name=${val.title}&type=${val.type}`
			}
			uni.navigateTo({
				url: url,
			});
			
		},
		selectType(res){
			if(res.type=='book'){
				return res.fictionId
			}else if(res.type=='comic'){
				return res.comicId
			}else{
				return res.videoId
			}
		}
		},
		mounted() {}
	};
</script>

<style scoped>
	.itemBook{
		width: 150rpx;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-left: 5rpx;
	}
</style>
