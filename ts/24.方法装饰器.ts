// == 方法装饰器
namespace MethodDecorator {
    // == 1、普通方法，target 对应的是类的 prototype
    // == 2、静态方法，target 对应的是类的构造函数
    function getNameDecorator(
        target: any,
        key: string,
        descriptor: PropertyDescriptor
    ) {
        console.log(target, key, descriptor);
        descriptor.writable = true;
        descriptor.value = function() {
            return 'decorator';
        };
    }
    class Test {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        @getNameDecorator
        getName() {
            return this.name;
        }
    }
    const test = new Test('dell');
    console.log(test.getName());
}
