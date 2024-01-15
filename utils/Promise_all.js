export const Async_query = async (limit,maxRetry,items,that) => {
	// 存放结果数组，是个异步数组
	const resultList = [];
	// 拿到当前需要并发的数组，使用 set 控制
	const poolList = new Set();
	let index = 0
	try {
		// 循环所有需要请求的数组
		for (const i of items) {
			let retryCount = 0;
			index++
			// const fn =  function itemQueryGo(item) {
			// 	// 此处的 item 就是每个请求
			// 	console.log(item,'item');
			// 	return item;
			// };

			const sendRequest = async () => {
				// 每一个请求，发送请求
				const resultItem = i;

				console.log(resultItem,'resultItem');
				// 向结果数组添加
				resultList.push(resultItem);

				// 给当前的控制数组限制并发数
				poolList.add(resultItem);
				// 需要给并发数量方法删除，保持不大于并发数
				const clean = () => poolList.delete(resultItem);

				// 结果回来，成功失败都删除
				resultItem.then(clean, clean);

				try {
					// 如果当前的并发数大于要控制的并发数那么直接调用一个拿到结果
					if (poolList.size >= limit) {
						 Promise.race(poolList)
					}
					console.log(resultItem);
					return await resultItem;
				} catch (error) {
					// 如果请求失败，重试
					retryCount++;
					if (retryCount <= maxRetry) {
						
							console.log(`失败重试中: ${retryCount}`);
							return await sendRequest();
					
					} else {
						throw new Error(`请求失败.`);
					}
				}
			};
			setTimeout(async ()=>{
				await sendRequest();
			},index*500)
			
		}
		console.log(resultList);
		return {
			success: true,
			data:  await Promise.all(resultList)
		};
	} catch (error) {
		return {
			success: false,
			error: error.message
		};
	}
};