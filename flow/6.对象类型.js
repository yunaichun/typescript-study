/* @flow */

// == 1、对象类型
type BorderConfigType = {
    width: number,
    color: string,
    hasShadow: boolean
}
const borderConfig : BorderConfigType = {
    width: 10,
    color: 'red',
    hasShadow: true,
}


// == 2、对象可选属性
type Test = {
    key1: ?string, // == key1 属性必须有。但是属性值不一定是 string，还可以是 null 或者 undefined；
    key2?: number, // == key2 属性可以没有。但是如果出现了 key2 属性，属性值必须是一个 number 类型
}
function myFn(t: Test) {
    if (t.key1 !== null && t.key1 !== undefined ) {
        // 在这里，可以放心的将 t.key1 作为字符串类型进行操作
        console.log(t.key1.slice(0,t.key1.length))
    }
}
