function logClass(target: any) {
	return class extends target {
		apiUrl: any;

		getData() {
			this.apiUrl = 'update:' + this.apiUrl;
			console.log(this.apiUrl);
		}
	};
}

function logProperty(params: any) {
	return function (target: any, propertyKey: any) {
		target[propertyKey] = params;
	};
}

@logClass
class HttpClient {
	@logProperty('chinavanes.com')
	public apiUrl: string | undefined;
	constructor() {
		// this.apiUrl = 'www.chinavanes.com';
	}

	getData() {
		console.log(this.apiUrl);
	}
}

var http: any = new HttpClient();
http.getData();
