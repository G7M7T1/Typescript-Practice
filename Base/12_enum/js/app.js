"use strict";
function show() {
    // let kp1: keypair = {1,'Vane'}
    var kp2 = { key: 1, value: 'Vane' };
    var kp3 = { value: 'Vane', key: 2 };
}
var calculator = {
    sum: function (first, second) {
        return first + second;
    },
};
console.log(calculator.sum(1, 2));
