"use strict";
// == 1、数组类型标注
var arr1 = [];
arr1.push('1');
// arr1.push(1); // 错误
// == 2、数组类型泛型标注
var arr2 = [];
arr2.push(1);
// arr1.push('1'); // 错误
// == 3、元组类型【可以存储不同类型的数据】
var data1 = ['1', 2];
data1.push('1');
data1.push(2);
var obj = {
    x: 1,
    y: '2',
    arr: [{
            id: 1,
            name: '1231'
        }]
};
obj.arr[0].id;
