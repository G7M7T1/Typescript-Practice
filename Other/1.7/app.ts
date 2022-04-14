interface IAnimal {
	name: string;
	makeSound(str: string): void;
}

interface IPerson extends IAnimal {
	work(): void;
}

class Programmer {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	coding(code: string) {
		console.log(`${this.name}正在${code}`);
	}
}

class WebDeveloper extends Programmer implements IPerson {
	constructor(name: string) {
		super(name);
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
w.coding('TypeScript');
