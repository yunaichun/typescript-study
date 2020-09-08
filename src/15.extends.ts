// == 1、接口继承
interface type1 {
    name: string,
    age: number,
};
interface type2 extends type1 {
    gender: string,
};
let person12: type2 = {
    name: '1',
    age: 2,
    gender: '3'
};


// == 2、泛型函数
function fn11<T>(args: T) {
}
fn11<number>(1); // let arr2: Array<number> = [];
fn11<string>('1');


// == 3、泛型配合 extends
type type33 = {
    x: number,
    y: string,
};
function fn<T extends type33>(args: T) {
}
fn({x:1, y: '2', z: 1000});
