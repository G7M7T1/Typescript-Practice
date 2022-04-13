class Person {
	private name: string; // 前面省略了public

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

	play(): string {
		return `${this.name}在Play`;
	}
}

class Student extends Person {
	// extends实现的是类的继承
	constructor(name: string) {
		super(name); // 初始化父类的构造函数
	}

	work(): void {
		console.log(`${this.name}正在work`);
	}

	getName(): string {
		return `我的名称是：${this.name}`;
	}

	play(): string {
		return `${this.name}在Play-子类`;
	}
}

var s = new Student('Vane');

console.log(s.play());
console.log(s.name);
