//接下来，我们来看看如何用js实现一个简单的异步并发任务控制器。首先，我们需要定义一个类来表示控制器对象，并在构造函数中初始化以下三个属性：
//`maxConcurrent`：最大并发数，也就是同时进行的异步任务数量。
//`currentConcurrent`：当前并发数，也就是正在进行中或者已经完成但还未从队列中移除的异步任务数量。
//`taskQueue`：任务队列，用一个数组来存储待执行或者正在执行中的返回promise对象函数。

// 定义一个异步任务控制器类
class AsyncTaskController {
	// 构造函数，接受最大并发数作为参数
	constructor(maxConcurrent) {
		// 初始化最大并发数
		this.maxConcurrent = maxConcurrent;
		// 初始化当前并发数
		this.currentConcurrent = 0;
		// 初始化任务队列
		this.taskQueue = [];
	}

	// 添加一个异步任务到队列中，接受一个返回promise的函数作为参数
	addTask(task) {
		// console.log(task);
		// 将任务函数加入队列
		this.taskQueue.push(task);
		// 尝试执行下一个任务
		this.next(3);
		return new Promise((resolve,reject)=>{
			
		})
	}

	// 执行下一个任务，如果当前并发数小于最大并发数，并且队列不为空，则从队列中取出一个任务并执行，否则什么都不做
	next(errCount) {
		if (this.currentConcurrent < this.maxConcurrent && this.taskQueue.length > 0) {
			// 取出队列中的第一个任务函数，并从队列中移除它
			const task = this.taskQueue.shift();
			// 增加当前并发数
			this.currentConcurrent++;
			// 执行任务函数，并处理其返回的promise对象
			setTimeout(()=>{
			task.then((result) => {
					// 如果成功，打印结果（或者做其他操作）
					console.log(result,"dddd");
					if(result.code != 0){
						this.err(errCount, task)
					}
				})
				.catch((error) => {
					// 如果失败，打印错误（或者做其他操作）
					console.error(error);
					this.err(errCount, task)
				})
				.finally(() => {
					// 不管成功还是失败，都要减少当前并发数，并执行下一个任务（递归调用）
					this.currentConcurrent--;
					this.next(3);
				});	
			},100)
		
		}
	}
	err(errCount, task) {
		if (errCount > 0) {
			errCount--
			setTimeout(()=>{
				task.then((result) => {
						// 如果成功，打印结果（或者做其他操作）
						console.log(result,"dddd");
						if(result.code != 0){
							this.err(errCount, task)
						}
					})
					.catch((error) => {
						// 如果失败，打印错误（或者做其他操作）
						console.error(error);
						this.err(errCount, task)
					})
			},1000)
			
		}

	}
}
export default AsyncTaskController
 