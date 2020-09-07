// == 1、数组类型标注
let arr1: string[] = [];
arr1.push('1');
// arr1.push(1); // 错误


// == 2、数组类型泛型标注
let arr2: Array<number> = [];
arr1.push('1');
// arr1.push(1); // 错误


// == 3、元组类型【可以存储不同类型的数据】
let data1: [string, number] = ['1', 2];
data1.push('1');
data1.push(2);
// data1.push(true); //错误
