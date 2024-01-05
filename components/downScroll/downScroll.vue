<template>
	<view>
		<mescroll-uni :down="downOption" :up="upOption" @down="downCallback" auto="false">
			<slot>

			</slot>
		</mescroll-uni>
	</view>
</template>

<script>
	import  mescrollUni  from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {
		props:['downLoadFun'],
		components:{
			mescrollUni
		},
		data() {
			return {
				downOption: {
					use: true,
				},
				upOption: {
					use: false,
				}
			}
		},
		onLoad() {

		},
		methods: {
			downCallback(mescroll) {
				// console.log(mescroll);
				// 	this.downLoadFun(mescroll)
					this.$emit('downLoadFun',mescroll)
			},
			panDuanFun(a,mescroll){
				if (Array.isArray(a)) {
					var flag = a.every(res => {
						return res === 0
					})
					if (flag) {
						mescroll.endSuccess(1, false)
					} else {
						mescroll.endErr()
					}
				} else {
					mescroll.endErr()
				}
				
			}
		}
	}
</script>

<style scoped>

</style>
