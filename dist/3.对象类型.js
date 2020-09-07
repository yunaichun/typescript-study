"use strict";
// == 1、对象字面量类型
var obj1 = {
    x: 1,
    y: 1
};
// obj1.x // 错误
var obj2 = {
    x: 1,
    y: 1
};
obj2.x;
// == 2、内置对象类型
var d1 = new Date();
d1.getTime();
// == 3、包装对象类型: String、Number、Boolean
var str1;
str1 = '1';
// str1 = new String('2'); // 错误
var str2;
str2 = '1';
str2 = new String('2'); // 正确
