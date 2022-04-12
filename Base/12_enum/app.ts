interface keypair {
	key: number;
	value: string;
}
interface cal {
	sum(first: number, second: number): number;
}

function show() {
	// let kp1: keypair = {1,'Vane'}
	let kp2: keypair = { key: 1, value: 'Vane' };
	let kp3: keypair = { value: 'Vane', key: 2 };
}

let calculator: cal = {
	sum(first: number, second: number) {
		return first + second;
	},
};

console.log(calculator.sum(1, 2));
