// == 1、函数类型
function foreach(data: string[], callback: (k: number, v: string) => void) {
    for (let i: number = 0; i < data.length; i++) {
        callback(i, data[i]);
    }
}
let arr = ['a', 'b', 'c'];
foreach(arr, function(k, v) {
    console.log(k, v)
});


// == 2、接口定义函数参数类型
interface Foo1 {
    foo1: string;
}
function foo1(sample: Foo1) {
    return sample;
}


// == 3、type 定义函数参数类型
type Foo2 ={
    foo: string;
}
function foo33(sample: Foo2) {
    return sample;
}


// == 4、函数参数可选值、默认值
function foo34(bar: number, bas?: string): void {
}
function foo35(bar: number, bas: string = 'hello') {
    console.log(bar, bas);
}
foo35(123);// 123, hello
foo35(123, 'world');// 123, world


// == 5、函数声明
type ShortHand = (a: string) => string;
type LongHand = {
    (a: string): string;
};
function ss(str: string, callback: ShortHand) {
    callback(str);
}
function ll(str: string, callback: LongHand) {
    callback(str);
}
