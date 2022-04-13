class Person {
	name: string; // 前面省略了public

	constructor(name: string) {
		// 实例化类的时候自动触发的函数
		this.name = name;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}
}

var p = new Person('Vane');

console.log(p.getName());
p.setName('Jack');
console.log(p.getName());
