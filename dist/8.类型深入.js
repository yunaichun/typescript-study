"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// == 1、联合类型
function reverse1(x, y) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return null;
}
var obj11 = {
    x: 1,
    y: 2
};
var obj22 = {
    z: 3
};
var obj33 = __assign(__assign({}, obj11), obj22);
var obj44 = __assign(__assign({}, obj11), obj22);
// == 3、字面量类型
function setPosition1(ele, direction) {
}
function setPosition2(ele, direction) {
}
// == 5、类型推导
function fn111(x) {
    if (x === void 0) { x = 1; }
}
function fn222(x, y) {
    return x + y;
}
// == 6、类型断言
var img1 = document.querySelector('.box');
var img2 = document.querySelector('.box');
if (img1) {
    img1.src;
}
