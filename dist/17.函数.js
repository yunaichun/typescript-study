"use strict";
// == 1、函数类型
function foreach(data, callback) {
    for (var i = 0; i < data.length; i++) {
        callback(i, data[i]);
    }
}
var arr = ['a', 'b', 'c'];
foreach(arr, function (k, v) {
    console.log(k, v);
});
function foo1(sample) {
    return sample;
}
function foo33(sample) {
    return sample;
}
// == 4、函数参数可选值、默认值
function foo34(bar, bas) {
}
function foo35(bar, bas) {
    if (bas === void 0) { bas = 'hello'; }
    console.log(bar, bas);
}
foo35(123); // 123, hello
foo35(123, 'world'); // 123, world
function ss(str, callback) {
    callback(str);
}
function ll(str, callback) {
    callback(str);
}
