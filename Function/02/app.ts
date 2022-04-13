function getUser(name: string, age: number): string {
	return `${name}年龄是${age}`;
}

console.log(getUser('Vane', 42));

var getInfo = function (name: string = 'Vane', age: number = 42): string {
	if (age == undefined) {
		return `${name}`;
	} else {
		return `${name}年龄是${age}`;
	}
};

console.log(getInfo('Vane', 12));
