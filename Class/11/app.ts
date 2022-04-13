class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	makeSound(): void {}
}

class Dog extends Animal {
	constructor(name: string) {
		super(name);
	}

	makeSound(): void {
		console.log('汪');
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

var c = new Cat('Cat Miao');
c.makeSound();
