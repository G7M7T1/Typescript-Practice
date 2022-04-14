// function getUser(name) {
// 	return name;
// }

// function getUser(name, age) {
// 	return `${name}年龄是${age}`;
// }

// console.log(getUser('Vane'));

// function getUser() {
// 	if (arguments.length === 1) {
// 		return arguments[0];
// 	} else {
// 		return arguments[0] + arguments[1];
// 	}
// }

// console.log(getUser('Vane', 42));

// function getUser(name: string): string;
// function getUser(age: number): number;

// function getUser(str: any): any {
// 	if (typeof str === 'string') {
// 		return '我是叫:' + str;
// 	} else {
// 		return '我的年龄是:' + str;
// 	}
// }

// console.log(getUser(true));

function getUser(name: string): string;
function getUser(name: string, age: number): string;
function getUser(name: string, age?: any): any {
	if (age) {
		return `我是${name}年龄是${age}`;
	} else {
		return `我是${name}`;
	}
}

console.log(getUser("true"));
