function logClass(target: any) {
	return class extends target {
		apiUrl: any = 'http://www.chinavanes.com';

		getData() {
			this.apiUrl = 'update:' + this.apiUrl;
			console.log(this.apiUrl);
		}
	};
}

@logClass
class HttpClient {
	public apiUrl: string | undefined;
	constructor() {
		this.apiUrl = 'www.chinavanes.com';
	}

	getData() {
		console.log(this.apiUrl);
	}
}

var http: any = new HttpClient();
http.getData();
