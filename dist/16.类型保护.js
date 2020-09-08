"use strict";
// == 1、断言方法
function toUpperCase1(str) {
    // if ((<string>str).toUpperCase) {
    //     return (<string>str).toUpperCase()
    // } else {
    //     return (<string[]>str).push()
    // }
}
// == 2、typeof
function toUpperCase2(str) {
    if (typeof str === 'string') {
        str.toUpperCase();
    }
    else {
        str.join('');
    }
}
// == 3、instanceof
function toUpperCase3(str) {
    if (str instanceof Array) {
        str.join('');
    }
    else {
        str.toUpperCase();
    }
}
// == 4、自定义类型保护
function canEach(data) {
    return data.forEach !== undefined;
}
function fn333(elements) {
    if (canEach(elements)) {
        elements.forEach(function () { });
    }
    else {
        elements.classList.add('box');
    }
}
var eles = document.querySelectorAll('.box');
fn333(eles);
