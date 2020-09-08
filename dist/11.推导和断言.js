"use strict";
// == 1、类型推导
function fn111(x) {
    if (x === void 0) { x = 1; }
}
function fn222(x, y) {
    return x + y;
}
// == 2、类型断言
var img1 = document.querySelector('.box');
var img2 = document.querySelector('.box');
if (img1) {
    img1.src;
}
