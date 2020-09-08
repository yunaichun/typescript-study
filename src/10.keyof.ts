// == 1、keyof 操作类型 -> 拿到 key 的值
interface Person {
    name: string,
    age: number,
};
type a = keyof Person; // == "name" | "age"
let data: a;


// == 2、keyof 的作用
let p11: Person = {
    name: '1',
    age: 2
}
function getPerson1Val(key: keyof Person) {
    return p11[key];
}
// == 获取css属性
function css(ele: Element, attr: keyof CSSStyleDeclaration) {
    return getComputedStyle(ele)[attr]
}
let bbox = document.querySelector('.box');
if (bbox) {
    css(bbox, 'opacity')
}


// == 3、keyof 配合 typeof
let p22 = {
    name: '1',
    age: 2,
    gender: 'male'
};
function getPerson2Val(key: keyof typeof p22) {
    return p22[key];
}
