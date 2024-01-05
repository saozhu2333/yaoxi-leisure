<template>
	<view class="content">
		<u-sticky :customNavHeight="0"> <Wnavbar :title="searchData.key"></Wnavbar></u-sticky>
		
		<view class="listdata-class-content">
			<u-list @scrolltolower="scrolltolower">

					<!-- #ifndef MP-WEIXIN -->
					<u-list-item v-for="(item,index) in listType=='book'?bookList:listType=='comic'?comicList:videoList" :key="index">
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<u-list-item v-for="(item,index) in selectType()" :key="index">
					<!-- #endif -->
					<view class="itemlist-css" style=" width: 750rpx; height: 180px;" @click="clickHomeItem(item)">
						
						<u--image :showLoading="true" :src="item.cover" width="130px" height="180px"></u--image>
						
						<view class="itemlist-css-right">
							<h2>{{item.title}}</h2>
							<view class="" style="display: flex;">
								<u--text :text="'作者：'" size="20"></u--text>
								<u--text :text="item.author" size="20"></u--text>
							</view>
							<view class="" style="display: flex; margin-top: 10px;">
								<u--text :text="item.descs" size="20" :lines="3"></u--text>
							</view>
						</view>
					</view>
				</u-list-item>
				<u-list-item>
					<u-loadmore :status="status" />

				</u-list-item>
			</u-list>

		</view>
	</view>
</template>

<script>
	import Wnavbar from "@/components/backNavbar/index.vue"
	import {
		mapActions,
		mapGetters,
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		props: ['type', 'name', 'title'],
		components: {
			Wnavbar
		},
		data() {
			return {
				searchData: {
					option: '',
					key: '',
					from: 1,
					size: 10
				},
				listType: null,
				status: 'loading'
			}
		},
		onLoad(option) {
			console.log(option);
			this.listType = option.type
			if (option.type == 'book') {
				this.searchData.option = 'fictionType'
				this.searchData.key = option.name
				if (option.title - 0) {
					this.searchData.option = 'title'
				}
				this.bookgetlistvuex(this.searchData)
			}
			if (option.type == 'comic') {
				this.searchData.option = 'comicType'
				this.searchData.key = option.name
				if (option.title - 0) {
					this.searchData.option = 'title'
				}
				this.comicgetlistvuex(this.searchData)

			}
			if (option.type == 'video') {
				this.searchData.option = 'videoType'
				this.searchData.key = option.name
				if (option.title - 0) {
					this.searchData.option = 'title'
				}
				this.videogetlistvuex(this.searchData)
			}


		},
		methods: {
			...mapActions({
				bookgetlistvuex: 'book/bookgetlist',
				comicgetlistvuex: 'comic/comicgetlist',
				videogetlistvuex: 'video/videogetlist',
			}),
			...mapMutations({
				bookresetsearchList: 'book/resetsearchList',
				comicresetsearchList: 'comic/resetsearchList',
				videoresetsearchList: 'video/resetsearchList',
			}),
			scrolltolower() {
				let count = null
				if (this.listType == 'book') {
					count = this.bookcount
					if(count<=10){
						this.status='nomore'
					}
					if (this.bookList.length + 10 <= count) {
						this.searchData.from++
					} else {
						console.log(this.bookList.length + 10, count);
						if (count - this.bookList.length <= 9) {
							this.searchData.from++
						} else {
							this.status='nomore'
							return
						}
					}
					this.bookgetlistvuex(this.searchData)
				}
				if (this.listType == 'comic') {
					count = this.comiccount
					if(count<=10){
						this.status='nomore'
					}
					if (this.comicList.length + 10 <= count) {
						this.searchData.from++
					} else {
						console.log(count);
						if (count - this.comicList.length <= 9) {
							this.searchData.from++
						} else {
							this.status='nomore'
							return
						}
					}
					this.comicgetlistvuex(this.searchData)
					console.log(this.comicList);
				}
				if (this.listType == 'video') {
					count = this.videocount
					if(count<=10){
						this.status='nomore'
					}
					if (this.videoList.length + 10 <= count) {
						this.searchData.from++
					} else {
						if (count - this.videoList.length <= 9) {
							this.searchData.from++
						} else {
							this.status='nomore'
							return
						}
					}
					this.videogetlistvuex(this.searchData)
				}
			},
			clickHomeItem(val){
				let url
				if(this.listType=='book'){
					url=`/pageB/chapter/indexChapter?id=${val.fictionId}&name=${val.title}&type=${val.type}`
				}
				if(this.listType=='comic'){
					url=`/pageB/chapter/indexChapter?id=${val.comicId}&name=${val.title}&type=${val.type}`
				}
				if(this.listType=='video'){
					url=`/pageB/chapter/indexChapter?id=${val.videoId}&name=${val.title}&type=${val.type}`
				}
				uni.navigateTo({
					url: url,
				});
				
			},
			selectType(){
				if(this.listType=='book'){
					return this.bookList
				}else if(this.listType=='comic'){
					return this.comicList
				}else{
					return this.videoList
				}
			}
		},
		mounted() {

		},
		computed: {
			...mapState({
				bookList: state => state.book.searchList, //这就是你所定义的文件夹的名称//这就是你所定义的文件夹的名称
				comicList: state => state.comic.searchList,
				videoList: state => state.video.searchList,
				bookcount: state => state.book.listcount, //这就是你所定义的文件夹的名称//这就是你所定义的文件夹的名称
				comiccount: state => state.comic.listcount,
				videocount: state => state.video.listcount,
			})
		},
		watch:{
			bookcount(newVal,oldVal){
				if(newVal<10){
					this.status='nomore'
				}
			},
			comiccount(newVal,oldVal){
				if(newVal<10){
					this.status='nomore'
				}
			},
			videocount(newVal,oldVal){
				if(newVal<10){
					this.status='nomore'
				}
			}
		},
		destroyed() {
			this.bookresetsearchList(null)
			this.comicresetsearchList(null)
			this.videoresetsearchList(null)
		}
	}
</script>

<style scoped>
.itemlist-css{
	margin: 10px;
	display: flex;
}
.itemlist-css-right{
	margin-left: 10px;
}
.listdata-class-content{
	margin-top: 80rpx;
}
/deep/.itemlist-css-right .u-text{
	width: auto !important;
	flex: 0 1 auto !important;
}
</style>
