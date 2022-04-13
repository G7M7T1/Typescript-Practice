function sum(a: number, b: number, c: number, ...args: number[]): number {
	console.log(args);
	var total = a + b + c;
	for (var i = 0; i < args.length; i++) {
		total += args[i];
	}

	return total;
}

console.log(sum(1, 2, 3, 4, 5));
