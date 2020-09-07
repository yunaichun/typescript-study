"use strict";
// == 1、void 无值类型【可以有 return 语句，但是 return 不能有值】
function fn1() {
    // return 1; //错误
    return;
}
// == 2、never 类型【不能有 return 语句】
function fn2() {
    // return; //错误
    throw new Error('error');
}
// == never 类型可以赋值给其他类型
var fn3;
fn3 = fn2();
// == 其他类型不可以赋值给 never 类型
var t1;
var t2 = 1;
// t1 = t2; //错误
// == 3、any 类型【禁止出现隐式 any 类型: noImplicitAnny】
function fn4(a) {
    a.index();
}
// == 4、unknown 类型【没有属性和方法，any是有的】
var t3;
// t3.indexOf(); //错误
// == 5、函数类型
function foreach(data, callback) {
    for (var i = 0; i < data.length; i++) {
        callback(i, data[i]);
    }
}
var arr = ['a', 'b', 'c'];
foreach(arr, function (k, v) {
    console.log(k, v);
});
// == 6、函数参数可选、多类型
function reverse(x, y) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return null;
}
