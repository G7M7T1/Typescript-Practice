var a: undefined;
a = undefined;
var b: null;
b = null;

var c: never;

c = (() => {
	throw new Error('错误信息');
})();
