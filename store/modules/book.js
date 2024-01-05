import {
	getsearchBook,
	getsearchBookChapter,
	getsearchBookContent
} from "@/http/api.js"
const book = {
	namespaced:true,
	state: {
	searchList:null,
	searchHomeList:null,
	chapterInfo:null,
	bookval:null,
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
			console.log(state.searchList);
		},
		//首页使用的list
		addHomeType(state,val){
			val.data.forEach(res=>{
				res.type=val.type
			})
				state.searchHomeList=[]
			state.searchHomeList.push(...val.data)
		},
		setBookVal(state,val){
			state.bookval=val.data
		},
		resetbookval(state,val){
			state.bookval=val
			
		},
		resetsearchList(state,val){
			state.searchList=val
		},
	},
	//Action确实和mutation 很类似,不同在于:Action 提交的是mutation，而不是直接变更状态。Action 可以包含任意异步操作
	actions: {
		async bookgetlist(context,val) {
			
			let result = await getsearchBook(val)
			if (result.data) {
				// this.addType(result.data, 'book')
				// this.searchBookList = result.data
				context.commit("addType",{data:result.data,type:'book',count:result.count})
			}
		return result.code
		},
		//首页使用的list
		homebookgetlist(context,val) {
			return new Promise((resolve,reject)=>{
				getsearchBook(val).then(res=>{
					if (res.data) {
						context.commit("addHomeType",{data:res.data,type:'book',count:res.count})
					}
					resolve(res)
				}).catch(err=>{
					reject(err)
				})
			})
		},
		async getsearchBookContentfun(context,val) {
			let result = await getsearchBookContent(val)
			//删除最后一项 推荐网站数据
			console.log(result.data);
			result.data.pop()
			context.commit("setBookVal",{data:result.data.join(),type:'book'})
			return result.code
		},
		
	},
	getters: {
		//首页使用的list
		booklist(state){
			return state.searchHomeList?state.searchHomeList:[]
		},
		bookchapter(state){
			return state.chapterInfo?state.chapterInfo:null
		}
	}

}

export default book
