function show<T>(args: T): T {
	return args;
}

var output1 = show<string>('Hello World');
var output2 = show<number>(123);
console.log(output1);

console.log(output2);
