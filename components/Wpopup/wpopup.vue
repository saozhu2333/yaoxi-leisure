<template>
	<view class="">
		<u-popup :show="show" mode="left" @close="close" @open="opencollapse" @change="changecollapse">
			<view class="collapse-box">
				<u-collapse @change="changecollapse" ref="collapse" accordion>
					<view class="collapse-title">
						<h3>请选择章节</h3>
					</view>

					<u-collapse-item :title="key" v-for="(val,key,index) in this.list" :key="key" ref="collapseHeight">
						<u-list v-if="val.state=='open'">
							<u-list-item v-for="(item, index) in val.val" :key="item.title">
								<u-cell :title="item.title" @click="selectClickChapter(item)">
								</u-cell>
							</u-list-item>
						</u-list>
					</u-collapse-item>
				</u-collapse>

			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: ['type', 'listData', 'id', 'name'],
		data() {
			return {
				show: false,
				list: {}
			};
		},
		watch: {
			listData: {
				handler(newVal, oldVal) {
					//深度拷贝防止处理数据时监听多次
					let val = JSON.parse(JSON.stringify(newVal))
					if (this.type == 'book') {
						this.list = this.reloadbooklistData(val, 100)

					} else if (this.type == 'comic') {
						this.list = this.reloadbooklistData(val, 100)

					} else if (this.type == 'video') {
						this.list = this.reloadbooklistData(val, 100)

					} else {
						this.list = val
					}
				},
				deep: true
			}
		},
		onLoad(option) {},
		methods: {
			open() {
				this.show = true

			},
			close() {
				this.show = false
			},
			reloadbooklistData(arr, width) {
				let list = {};
				let num = 1
				while (arr.length > width) {
					let tmpList = arr.splice(0, width);
					list[`${num}-${num+99}`] = {}
					list[`${num}-${num+99}`].val = tmpList
					list[`${num}-${num+99}`].state = 'close'
					num += 100
				}
				let endNum = num + arr.length - 1
				if (arr.length < 100 && arr.length > 0) {
					let tmpList = arr.splice(0, arr.length);
					list[`${num}-${endNum}`] = {}
					list[`${num}-${endNum}`].val = tmpList
					list[`${num}-${endNum}`].state = 'close'
				}
				console.log(list);
				return list;
			},
			selectClickChapter(val) {
				let url
				if (this.type == 'video') {
					url = `/pageB/VideoContent/content?chapterPath=${val.chapterPath}&title=${this.name}`
				}
				if (this.type == 'book') {
					url =
						`/pageB/BookContent/content?chapterId=${val.chapterId}&title=${val.title}&id=${this.id.fictionId}`
				}
				if (this.type == 'comic') {
					url =
						`/pageB/comicContent/content?chapterId=${val.chapterId}&title=${val.title}&id=${this.id.cartoonId}`
				}
				uni.navigateTo({
					url: url,
				});
			},
			opencollapse(e) {
				console.log('open', e)
			},
			closecollapse(e) {
				// console.log('close', e)
			},
			changecollapse(e) {
				console.log('change', e)
				e.forEach(res => {
						Object.values(this.list)[res.name].state = res.status
					if(res.status=='open'){
						//处理高度获取不到问题
						this.$nextTick(() => {
							this.$refs.collapseHeight[res.name].setContentAnimate();
						});
					}
					
				})
			}
		},
		mounted() {

		}
	};
</script>

<style scoped>
	.collapse-box {
		width: 400rpx;
		height: 100%;
		overflow: auto;
		/* padding-bottom: 100rpx; */
	}

	.scroll_view_style {
		height: 100%;
	}

	.popup-bottom-null {
		display: block;
		width: 100%;
		height: 200rpx;
	}

	.collapse-title {
		padding: 20rpx 10rpx 20rpx 10rpx;
	}

	.collapse-title h3 {
		text-align: center;
	}

	::v-deep .u-popup__content {
		height: 100%;
	}
</style>
