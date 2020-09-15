/* @flow */

// == 1.交叉基本类型
type X1 = 1 | 2 | 3 | 4 | 5
type X2 =         3 | 4 | 5 | 6 | 7
type X3 = X1 & X2;
let a: X3 = 3;
a = 4;
a = 5;
// a = 1; // == 报错


// == 2.交叉对象类型
type Y1 = {
    name: string,
    male: boolean
}
type Y2 = {
    name: string,
    age: number
}
type Y3 = Y1 & Y2;
const right: Y3 = {
    name: 'zhihu',
    male: true,
    age: 5
}
// const wrong: Y3 = {name: 'zhihu'}; // == Flow 会报错，因为缺少 male 和 age 属性
