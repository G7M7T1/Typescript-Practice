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

class HttpClient {
	public apiUrl: string | undefined;
	constructor() {
		this.apiUrl = 'www.chinavanes.com';
	}
	@logMethod('http://www.chinavanes.com')
	getData() {
		console.log(this.apiUrl);
	}
}

var http: any = new HttpClient();
http.getData(1, 2, 3, 4);
