"use strict";
// == 1、undefined 和 null 不能被改为其他类型
// let un: undefined;
// un = 1; // 错误
// let nul: null;
// nul = 1; // 错误
var d = '1';
// d = null; 【strictNullChecks 开启的话可以正常编译】
// d = undefined;【strictNullChecks 开启的话可以正常编译】
// == 2、未赋值的情况，默认类型为 any，默认值是 undefined
var e;
// == 3、注意 null 类型【strictNullChecks 需要开启】
var f = null;
// f.b // 错误
var ele = document.querySelector('.box');
// ele.id; // 错误，有 null 值的风险
