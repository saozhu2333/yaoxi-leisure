//引入request.js文件
import request from "./request";

// 查询书籍列表
export function getsearchBook(data) {
    return request({
        url: `/fiction/search/${data.option}/${data.key}/${data.from}/${data.size}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询书籍章节
export function getsearchBookChapter(data) {
    return request({
        url: `/fictionChapter/search/${data.fictionId}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询书籍内容
export function getsearchBookContent(data) {
    return request({
        url: `/fictionContent/search/${data.chapterId}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询漫画列表
export function getsearchComic(data) {
    return request({
        url: `/comic/search/${data.option}/${data.key}/${data.from}/${data.size}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询漫画章节
export function getsearchComicChapter(data) {
    return request({
        url: `/comicChapter/search/${data.cartoonId}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询漫画内容
export function getsearchComicContent(data) {
    return request({
        url: `/comicContent/search/${data.chapterId}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询电影列表
export function getsearchVideo(data) {
    return request({
        url: `/video/search/${data.option}/${data.key}/${data.from}/${data.size}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}
// 查询电影章节
export function getsearchVideoChapter(data) {
    return request({
        url: `/videoChapter/search/${data.videoId}`, // 这个地址是去掉公共地址剩下的地址
        method: "GET", // 请求方式 支持多种方式  get post put delete 等等
        // data //发送请求要配置的参数 无参数的情况下也可以不写
    });
}