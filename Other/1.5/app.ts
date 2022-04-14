// abstract class Animal {
// 	name: string = 'Vane';
// 	abstract makeSound(str: string): void;
// }

// class Dog extends Animal {
// 	makeSound(str: string): void {
// 		console.log(`${this.name}正在${str}`);
// 	}
// 	name: string;
// 	constructor(name: string) {
// 		super();
// 		this.name = name;
// 	}
// }

// var d = new Dog('Wang');
// d.makeSound('WangWang');

interface IAnimal {
	name: string;
	makeSound(str: string): void;
}

class Dog implements IAnimal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	makeSound(str: string): void {
		console.log(`${this.name}正在${str}`);
	}
}

var d = new Dog('Wang');
d.makeSound('WangWang');
