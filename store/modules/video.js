import {
	getsearchVideo,
	getsearchVideoChapter,
} from "@/http/api.js"
const video = {
	namespaced: true,
	state: {
		searchList: null,
		searchHomeList: null,
		listcount: 0
	},
	mutations: {
		//mutations方法需要传入两个参数,一个是state另一个是传入的参数(同步)
		addType(state, val) {
			val.data.forEach(res => {
				res.type = val.type
			})
			if (!state.searchList) {
				state.searchList = []
			}
			state.searchList.push(...val.data)
			state.listcount = val.count
		},
		addHomeType(state, val) {
			val.data.forEach(res => {
				res.type = val.type
			})
			state.searchHomeList = []
			state.searchHomeList.push(...val.data)
		},
		resetsearchList(state, val) {
			state.searchList = val
		},
	},
	//Action确实和mutation 很类似,不同在于:Action 提交的是mutation，而不是直接变更状态。Action 可以包含任意异步操作
	actions: {
		async videogetlist(context, val) {
			let result = await getsearchVideo(val)
			if (result.data) {
				// this.addType(result.data, 'book')
				// this.searchBookList = result.data
				context.commit("addType", {
					data: result.data,
					type: 'video',
					count: result.count
				})
			}
			return result.code
		},
		//首页使用的list
		async homevideogetlist(context, val) {
		return	new Promise((resolve, reject) => {
					getsearchVideo(val).then(res => {
						if (res.data) {
							context.commit("addHomeType", {
								data: res.data,
								type: 'video',
								count: res.count
							})
						}
						if(res.code){
							reject(res.msg)
						}
						resolve(res)
					}).catch(err => {
						reject(err)
					})
				})
			
		},
	},
	getters: {
		videolist(state) {
			return state.searchHomeList ? state.searchHomeList : []
		}
	}

}

export default video