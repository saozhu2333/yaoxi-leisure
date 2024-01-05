import {
	getsearchComicChapter,
	getsearchBookChapter,
	getsearchVideoChapter
} from "@/http/api.js"
const chapter = {
	namespaced:true,
	state: {
	chapterInfo:null,
	},
	mutations: {
		//mutations方法需要传入两个参数,一个是state另一个是传入的参数(同步)
		setBookChapter(state,val){
			state.chapterInfo=val.data
			state.chapterInfo.typeList=val.data.fictionType
			console.log(state.chapterInfo);
		},
		setComicChapter(state,val){
			state.chapterInfo=val.data
			state.chapterInfo.typeList=val.data.comicType
			console.log(state.chapterInfo);
		},
		setVideoChapter(state,val){
			state.chapterInfo=val.data
			state.chapterInfo.typeList=val.data.videoType
			console.log(state.chapterInfo);
		}
	},
	//Action确实和mutation 很类似,不同在于:Action 提交的是mutation，而不是直接变更状态。Action 可以包含任意异步操作
	actions: {
		async getsearchBookChapterfun(context,val) {
			let result = await getsearchBookChapter(val)
			if (result.data) {
				// this.addType(result.data, 'book')
				// this.searchBookList = result.data
				context.commit("setBookChapter",{data:result.data})
			}
		return result.code
		},
		async getsearchComicChapterfun(context,val) {
			let result = await getsearchComicChapter(val)
			if (result.data) {
			context.commit("setComicChapter",{data:result.data})
			}
			return result.code
		},
		async getsearchVideoChapterfun(context,val) {
			let result = await getsearchVideoChapter(val)
			if (result.data) {
			context.commit("setVideoChapter",{data:result.data})
			}
			return result.code
		},
		
	},
	getters: {
		bookchapter(state){
			return state.chapterInfo?state.chapterInfo:null
		}
	}

}

export default chapter
