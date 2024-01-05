let baseUrl = 'http://api.pingcc.cn'; // 后端的主机名 + 端口号

if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	baseUrl = 'http://api.pingcc.cn'
} else {
	console.log('生产环境');
	baseUrl = 'http://api.pingcc.cn'
}
// 带 Token 请求
const httpTokenRequest = (opts, data) => {
	uni.onNetworkStatusChange(function(res) {
		if (!res.isConnected) {
			uni.showToast({
				title: '网络连接不可用！',
				icon: 'none'
			});
		}
		return false
	});
	let token = uni.getStorageSync('token');
	// if (token == '' || token == undefined || token == null) {
	if (false) {
		uni.showToast({
			title: '账号已过期，请重新登录',
			icon: 'none',
			complete: function() {
				uni.reLaunch({
					url: '/pages/tabbar/tabbar-1/tabbar-1'
				});
			}
		});
	} else {
		let httpDefaultOpts = {
			url: baseUrl + opts.url,
			data: data,
			method: opts.method || 'GET',
			header: opts.method == 'get' ? {
				'X-Access-Token': token,
				'X-Requested-With': 'XMLHttpRequest',
				"Accept": "application/json",
				"Content-Type": "application/json; charset=UTF-8",
				"Cache-Control": "no-cache"
			} : {
				// 'X-Access-Token': token,
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
			},
			dataType: 'json',
		}
		let promise = new Promise(function(resolve, reject) {
			uni.request(httpDefaultOpts).then(
				(res) => {
					if(res[0]?.errMsg=='request:fail'){
						uni.showToast({
							title: '服务器错误',
							duration: 2000,
							icon:'none'
						});
						resolve([])
					}
					if (res[1].statusCode == 200) {
						if(res[1].data.code==2){
							uni.showToast({
								title: res[1].data.msg+'请重新刷新',
								duration: 2000,
								icon:'none'
							});
						}
						resolve(res[1].data)
						
					} else {
						if (res[1].statusCode == 5000) {
							// uni.showModal({
							// 	title: '提示',
							// 	content: res[1].data.message,
							// 	success: function (res) {
							// 		if (res.confirm) {
							// 			uni.reLaunch({
							// 				url: '/pages/login/login'
							// 			});
							// 			uni.clearStorageSync();
							// 		} 
							// 	}
							// });
							uni.reLaunch({
								url: '/pages/login/index'
							});
							uni.clearStorageSync();
						} else {
							resolve(res[1])
							// uni.showToast({
							// 	title: '' + res[1].data.message,
							// 	icon: 'none'
							// })
						}
					}
				}
			).catch(
				(response) => {
					reject(response)
				}
			)
		})
		return promise
	}
};

// 导出去
export default httpTokenRequest;