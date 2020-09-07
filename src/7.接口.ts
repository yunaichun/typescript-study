// 接口是一种类型，不能作为值使用
interface Point {
    x: number,
    y: number,
}
let p1: Point = {
    x: 1,
    y: 2
}


// == 1.可选属性
interface Point2 {
    x: number,
    y: number,
    color?: string
}
let p2: Point2 = {
    x: 1,
    y: 2
}


// == 2.只读属性
interface Point3 {
    readonly x: number,
    readonly y: number,
    color?: string
}
let p3: Point3 = {
    x: 1,
    y: 2
}
// p3.x = 4;// 错误


// == 3.任意属性
interface Point4 {
    x: number,
    y: number,
    [prop: string]: number
};
let p4: Point4 = {
    x: 1,
    y: 2,
    0: 999
};
p4.t = 10;
p4[1] = 1;
// == 注意：number 类型必须是 string 类型的子类型
interface Point5 {
    [prop1: string]: Object,
    [prop2: number]: number
};


// == 4.对象数组
interface Obj {
    x: number,
    y: string,
    arr: Arr[],
}
interface Arr {
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
