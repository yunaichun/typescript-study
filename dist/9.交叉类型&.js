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
var obj11 = {
    x: 1,
    y: 2
};
var obj22 = {
    z: 3
};
var obj33 = __assign(__assign({}, obj11), obj22);
var obj44 = __assign(__assign({}, obj11), obj22);
