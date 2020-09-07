// == 1、对象字面量类型
let obj1: object = {
    x: 1,
    y: 1
}
// obj1.x // 错误
let obj2: {x: number, y: number} = {
    x: 1,
    y: 1
}
obj2.x


// == 2、内置对象类型
let d1: Date = new Date();
d1.getTime();


// == 3、包装对象类型: String、Number、Boolean
let str1: string;
str1 = '1';
// str1 = new String('2'); // 错误
let str2: String;
str2 = '1';
str2 = new String('2'); // 正确
