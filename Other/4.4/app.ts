function logMethod(params: any) {
	return function (target: any, methodName: any, desc: any) {
		// console.log(params);
		// console.log(target);
		// console.log(methodName);
		// console.log(desc);

		let oMethod = desc.value;
		desc.value = function (...args: any[]) {
			let sum = 0;
			for (let i = 0; i < args.length; i++) {
				sum += args[i];
			}

			console.log(sum);
			oMethod.apply(this, args);
		};
	};
}

function logParam(params: any) {
	return function (target: any, methodName: any, paramIndex: number) {
		console.log(target, methodName, paramIndex);
		target.siteName = params;
	};
}

class HttpClient {
	public apiUrl: string | undefined;
	constructor() {
		this.apiUrl = 'www.chinavanes.com';
	}
	@logMethod('http://www.chinavanes.com')
	getData(@logParam('风向标') ...args: any) {
		console.log(this.apiUrl);
		console.log(args);
	}
}

var http: any = new HttpClient();
http.getData(1, 2, 3, 4);
console.log(http.siteName);
