class Person {
	public name: string;
	public age: number;

	static married: Boolean = true;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	work(): string {
		return `${this.name}年龄是${this.age}`;
	}

	static play(): void {
		console.log('play' + this.married);
	}
}

var p = new Person('Vane', 42);
console.log(p.name);
console.log(p.work());

console.log(Person.married);
Person.play();
