"use strict";
;
var data;
// == 2、keyof 的作用
var p11 = {
    name: '1',
    age: 2
};
function getPerson1Val(key) {
    return p11[key];
}
// == 获取css属性
function css(ele, attr) {
    return getComputedStyle(ele)[attr];
}
var bbox = document.querySelector('.box');
if (bbox) {
    css(bbox, 'opacity');
}
// == 3、keyof 配合 typeof
var p22 = {
    name: '1',
    age: 2,
    gender: 'male'
};
function getPerson2Val(key) {
    return p22[key];
}
