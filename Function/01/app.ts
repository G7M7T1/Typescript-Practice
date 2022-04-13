function getUser(name: string, age: number): string {
	return `${name}年龄是${age}`;
}

console.log(getUser('Vane', 42));

var getInfo = function (name: string, age?: number): string {
	if (age == undefined) {
		return `${name}`;
	} else {
		return `${name}年龄是${age}`;
	}
};

console.log(getInfo('Vane'));
