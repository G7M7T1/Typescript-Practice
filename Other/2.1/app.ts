// interface IProcessor<T> {
// 	result: T;
// 	process: (a: T, b: T) => T;
// }

// function process(a: number, b: number): number {
// 	return a + b;
// }

// let numProcessor: IProcessor<number> = { result: 1, process };

// console.log(numProcessor.process(1, 2));

interface KeyPair<T, U> {
	key: T;
	value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: 'Vane' };
let kv2: KeyPair<number, number> = { key: 1, value: 1 };
