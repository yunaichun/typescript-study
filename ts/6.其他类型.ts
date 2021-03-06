// == 1、void 无值类型【可以有 return 语句，但是 return 不能有值】
function fn1(): void {
    // return 1; //错误
    return;
}


// == 2、never 类型【不能有 return 语句】
function fn2(): never {
    // return; //错误
    throw new Error('error');
}
// == never 类型可以赋值给其他类型
let fn3: string;
fn3 = fn2();
// == 其他类型不可以赋值给 never 类型
let t1: never;
let t2: any = 1;
// t1 = t2; //错误


// == 3、any 类型【禁止出现隐式 any 类型: noImplicitAnny】
function fn4(a: any) {
    a.index()
}


// == 4、unknown 类型【没有属性和方法，any是有的】
let t3: unknown;
// t3.indexOf(); //错误
