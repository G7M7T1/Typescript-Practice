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

function Student() {
	Person.call(this); // 对象冒充继承
}

var s = new Student();
s.work(); // 对象冒充继承可以继承父类里面的构造函数里面属性及方法

console.log(s.married);
s.play(); // 对象冒充继承不可以继承父类里面的原型链上面的属性及方法

// 原型链上的属性会被多个实例对象所共享，而构造函数则不会
