abstract class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	abstract makeSound(): void;

	eat(): string {
		return `${this.name} eat`;
	}
}

class Dog extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): void {
		console.log('汪');
	}

	eat(): string {
		return `${this.name} eat 狗粮`;
	}
}

class Cat extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): void {
		console.log('喵');
	}
}

var d = new Dog('Dog Wang');
d.makeSound();
console.log(d.eat());

var c = new Cat('Cat Miao');
c.makeSound();
console.log(c.eat());
