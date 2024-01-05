import {
	getsearchComic,
	getsearchComicChapter,
	getsearchComicContent
} from "@/http/api.js"
const comic = {
	namespaced:true,
	state: {
	searchList:null,
	searchHomeList:null,
	chapterInfo:null,
	ComicVal:null,
	onloadComicValImg:[],
	listcount:0
	},
	mutations: {
		//mutations方法需要传入两个参数,一个是state另一个是传入的参数(同步)
		addType(state,val){
			val.data.forEach(res=>{
				res.type=val.type
			})
			if(!state.searchList){
				state.searchList=[]
			}
			state.searchList.push(...val.data)
			state.listcount=val.count

		},
		addHomeType(state,val){
			val.data.forEach(res=>{
				res.type=val.type
			})
				state.searchHomeList=[]
			state.searchHomeList.push(...val.data)
		},
		setComicVal(state,val){
			state.ComicVal=val.data
		},
		changeOnloadComicValImg(state){
			if(state.ComicVal.length){
				state.onloadComicValImg.push(state.ComicVal.shift())
			}
			
		},
		resetComicval(state,val){
			state.ComicVal=val
			state.onloadComicValImg=[]
			
		},
		resetsearchList(state,val){
			state.searchList=val
		},
	},
	//Action确实和mutation 很类似,不同在于:Action 提交的是mutation，而不是直接变更状态。Action 可以包含任意异步操作
	actions: {
		async comicgetlist(context,val) {
			let result = await getsearchComic(val)
			if (result.data) {
				// this.addType(result.data, 'book')
				// this.searchBookList = result.data
				context.commit("addType",{data:result.data,type:'comic',count:result.count})
			}
		return result.code
		},
		//首页使用的list
		async homecomicgetlist(context,val) {
			
			let result = await getsearchComic(val)
			if (result.data) {
				// this.addType(result.data, 'book')
				// this.searchBookList = result.data
				context.commit("addHomeType",{data:result.data,type:'comic',count:result.count})
			}
		return result.code
		},
		async getsearchComicContentfun(context,val) {
			let result = await getsearchComicContent(val)
			if (result.data) {
				// this.addType(result.data, 'book')
				// this.searchBookList = result.data
				console.log(result.data);
				context.commit("setComicVal",{data:result.data})
				context.commit("changeOnloadComicValImg")
				console.log(this.state);
			}
		return result.code
		},
	},
	getters: {
		comiclist(state){
			return state.searchHomeList?state.searchHomeList:[]
		},
		comicchapter(state){
			return state.chapterInfo?state.chapterInfo:null
		},
		onloadComicValImg(state){
			return state.chapterInfo?state.chapterInfo:null
		}
	}

}

export default comic
