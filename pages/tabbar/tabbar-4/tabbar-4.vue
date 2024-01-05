<template>
	<view>
		<view class="" style="margin: 20rpx 20rpx;">
			<nx-search :selectList="selectList" button="inside" @search="doSearch" @confirm="doSearc" v-model="keyword" />
		</view>
		
	</view>
</template>

<script>
	import nxSearch from "@/components/nx-search/nx-search.vue"

	export default {
		components: {
			nxSearch
		},
		data() {
			return {
				selectList: [{
						id: 1,
						name: '小说'
					},
					{
						id: 2,
						name: '漫画'
					},
					{
						id: 3,
						name: '视频'
					},
				],
				keyword: ''
			}
		},
		onLoad() {

		},
		methods: {
			doSearch(val) {
				let url=null
				
				if(val.selectIndex==0){
					url=`/pageA/dataList/dataList?type=${'book'}&name=${val.keyword}&title=${1}`
				}
				if(val.selectIndex==1){
					url=`/pageA/dataList/dataList?type=${'comic'}&name=${val.keyword}&title=${1}`
				}
				if(val.selectIndex==2){
					url=`/pageA/dataList/dataList?type=${'video'}&name=${val.keyword}&title=${1}`
				}
				uni.navigateTo({
					url: url,
				});
			},
			doSearc(val) {
				this.doSearch(val)
			},
		}
	}
</script>

<style>

</style>
