function Person(name, age) {
	this.name = name;
	this.age = age;
	this.work = function () {
		console.log(`${this.name}年龄${this.age}`);
	};
}

Person.prototype.married = true;
Person.prototype.play = function () {
	console.log(`${this.name}`);
};

// var p = new Person('Vane', 42);
// p.work();

function Student(name, age) {
	Person.call(this, name, age);
}

Student.prototype = Person.prototype;

var s1 = new Student('Jack', 12); // 实例化以后的子类是没有办法给父类进行传参处理
s1.work();

var s2 = new Student('Rose', 18);
s2.play();
