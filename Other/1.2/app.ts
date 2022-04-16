/*
type: post put delete get
url: 请求地址
data?: 参数
dataType: json
*/

interface IAjaxConfig {
	type: string;
	url: string;
	data?: string;
	dataType: string;
}

abstract class TsAjax {
	abstract _post(url: string, data?: string): any;
	abstract _put(url: string, data?: string): any;
	abstract _delete(url: string, data?: string): any;
	abstract _get(url: string, data?: string): any;
}

class Ajax extends TsAjax {
	_post(url: string, data?: string | undefined) {
		return this.doAjax({
			type: 'POST',
			data,
			url,
			dataType: 'json',
		});
	}
	_put(url: string, data?: string | undefined) {
		return this.doAjax({
			type: 'PUT',
			data,
			url,
			dataType: 'json',
		});
	}
	_delete(url: string, data?: string | undefined) {
		return this.doAjax({
			type: 'DELETE',
			data,
			url,
			dataType: 'json',
		});
	}
	_get(url: string, data?: string | undefined) {
		return this.doAjax({
			type: 'GET',
			data,
			url,
			dataType: 'json',
		});
	}
	private doAjax(config: IAjaxConfig): any {
		return new Promise<any>((resolve: any, reject: any) => {
			let result = '';

			let xhr = new XMLHttpRequest();

			xhr.open(config.type, config.url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(config.data);

			xhr.onreadystatechange = () => {
				let data = xhr.responseText;

				if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 201)) {
					result = JSON.parse(data);
					console.log(result);
					return resolve(result);

				}
			};
		});
	}
}

let myAjax = new Ajax();

// let postData = `title=newTitle-1&author=newAuthor-1`;

myAjax._delete('http://localhost:3004/posts/3').then((data: any) => {
	console.log(data);
});
