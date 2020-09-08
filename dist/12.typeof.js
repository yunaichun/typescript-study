"use strict";
// == 1、typeof 操作值 -> 拿到 interface
var colors = {
    color1: 'red',
    color2: 'blue'
};
var aa = typeof colors; // == "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
var test1 = {
    color1: 'red1',
    color2: 'blue1'
};
