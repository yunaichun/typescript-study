// == 类的装饰器
// == 1、装饰器本身是一个函数
// == 2、类装饰器接受的参数是构造函数
// == 3、装饰器通过 @ 符号来使用
function testDecorator() {
    return function<
        T extends new (...args: any[]) => any
    >(constructor: T) {
        return class extends constructor {
            name = 'lee';
            getName() {
                return this.name;
            }
        };
    };
}
// == 1、写法一
@testDecorator()
class Test2{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const test2 = new Test2('dell');
// == test2 后面要用 as any， 不然会报错
console.log((test2 as any).getName());


// == 2、写法二
const Test = testDecorator()(
    class {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
);
const test = new Test('dell');
console.log(test.getName());
