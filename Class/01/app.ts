function Person() {
	this.name = 'Vane';
	this.age = 42;
	this.work = function () {
		console.log('work');
	};
}

Person.prototype.married = true;
Person.prototype.play = function () {
	console.log('play');
};

var p = new Person();
console.log(p.name);
console.log(p.married);

p.work();
p.play();

// 原型链上的属性会被多个实例对象所共享，而构造函数则不会
