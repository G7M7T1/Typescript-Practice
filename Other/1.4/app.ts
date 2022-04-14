// interface States {
// 	[index: number]: boolean;
// }

// var s: States = [true, false];
// console.log(s[0]);

interface States {
	[state: string]: any;
	name: string;
}

var s: States = { name: 'Vane' };
s['married'] = true;
s['age'] = 42;
s['hobbies'] = ['computer', 'movie'];
console.log(s);
