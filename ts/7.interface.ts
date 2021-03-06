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


// == 4、函数属性
interface Point6 {
    name: string,
    say(): number,
    say2: () => number
};
const p5: Point6 = {
    name: '1',
    say: () => {
        return 1;
    },
    say2: () => {
        return 2;
    }
}

// == 5、接口定义函数
interface SayHi {
    (a: string): string
}
type SayHi2 = (a: string) => string;
const sayHi: SayHi = (word: string) => {
    return word;
}


// == 6、class 应用接口
class User implements Point6 {
    name = '1';
    say() {
        return 1;
    }
    say2() {
        return 2;
    }
}