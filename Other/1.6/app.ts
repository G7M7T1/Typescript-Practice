interface IAnimal {
	name: string;
	makeSound(str: string): void;
}

interface IPerson extends IAnimal {
	work(): void;
}

class WebDeveloper implements IPerson {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	makeSound(str: string): void {
		console.log(`${this.name}正在${str}`);
	}
	work(): void {
		console.log('Work');
	}
}

var w = new WebDeveloper('Vane');
w.makeSound('哈哈');
w.work();
