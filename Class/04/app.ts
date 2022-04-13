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

Person.getInfo = function () {
	console.log('getInfo');
};

var p = new Person();
console.log(p.name);
console.log(p.married);

p.work();
p.play();

function Student() {}

Student.prototype = new Person();

var s = new Student();
s.work(); // 原型链继承是可以实现父类里的构造函数方法内容

console.log(s.married);
s.play(); // 原型链继承是可以实现父类里的原型链的属性及方法内容

// 原型链上的属性会被多个实例对象所共享，而构造函数则不会
