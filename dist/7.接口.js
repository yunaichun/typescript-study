"use strict";
var p1 = {
    x: 1,
    y: 2
};
var p2 = {
    x: 1,
    y: 2
};
var p3 = {
    x: 1,
    y: 2
};
;
var p4 = {
    x: 1,
    y: 2,
    0: 999
};
p4.t = 10;
p4[1] = 1;
;
var obj = {
    x: 1,
    y: '2',
    arr: [{
            id: 1,
            name: '1231'
        }]
};
obj.arr[0].id;
