// 既有数字的最小值计算，又有字符串的最小值计算操作
class MinClass<T> {
	list: T[] = [];

	add(num: T) {
		this.list.push(num);
	}

	min(): T {
		var minNum = this.list[0];

		for (let i = 1; i <= this.list.length; i++) {
			if (minNum > this.list[i]) {
				minNum = this.list[i];
			}
		}
		return minNum;
	}
}

var m = new MinClass<string>();
m.add('a');
m.add('c');
m.add('b');
m.add('z');

console.log(m.min());

var m1 = new MinClass<number>();
m1.add(4);
m1.add(2);
m1.add(12);
m1.add(29);

console.log(m1.min());
