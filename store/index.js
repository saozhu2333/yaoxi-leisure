import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book.js'
import comic from './modules/comic.js'
import video from './modules/video.js'
import chapter from './modules/chapter.js'
Vue.use(Vuex)

const store= new Vuex.Store({
    modules: {
		book,
		comic,
		video,
		chapter
    },
})
export default store