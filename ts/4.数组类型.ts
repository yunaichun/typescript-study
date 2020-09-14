// == 1、数组类型标注
let arr1: string[] = [];
arr1.push('1');
// arr1.push(1); // 错误


// == 2、数组类型泛型标注
let arr2: Array<number> = [];
arr2.push(1);
// arr1.push('1'); // 错误


// == 3、元组类型【可以存储不同类型的数据】
let data1: [string, number] = ['1', 2];
data1.push('1');
data1.push(2);
// data1.push(true); //错误


// == 4.对象数组
interface Obj {
    x: number,
    y: string,
    arr: ArrType[],
}
interface ArrType {
    id: number,
    name: string
}
let obj: Obj = {
    x: 1,
    y: '2',
    arr: [{
        id: 1,
        name: '1231',
    }]
}
obj.arr[0].id;
