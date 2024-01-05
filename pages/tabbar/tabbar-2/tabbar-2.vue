<template>
	<view class="content">
		<category :categoryList="categoryList" :subCategoryList="subCategoryList" @categoryMainClick="categoryMainClick"
			@categorySubClick="categorySubClick"></category>
	</view>
</template>

<script>
	import category from "@/components/qiyue-category/qiyue-category.vue"
	import {
		bookList,
		comicList,
		videoList
	} from "@/static/cateGory/data.js"
	export default {
		components: {
			category
		},
		data() {
			return {
				categoryList: [{
					name: '小说',
					subCategoryList: bookList
				}, {
					name: '漫画',
					subCategoryList: comicList
				}, {
					name: '视频',
					subCategoryList: videoList,

				}, ],
				subCategoryList: [

				]
			}
		},
		onLoad() {

		},
		methods: {
			//点击更换右侧数据
			categoryMainClick(category) {
				this.subCategoryList = category.subCategoryList
			},
			categorySubClick(val) {
				console.log(val);
				let url=`/pageA/dataList/dataList?type=${val.type}&name=${val.name}&title=${0}`
				uni.navigateTo({
					url: url,
				});
			}
		},
		mounted() {
			console.log(this.categoryList);
			this.subCategoryList=bookList
		}
	}
</script>

<style>
	.content {
		text-align: center;
	}
</style>
