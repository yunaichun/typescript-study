// == 属性访问器
namespace PropertyDecorator {
    // == 1、对属性的 descriptor 进行修改（替换掉原来的 descriptor）
    function nameDecorator1(target: any, key: string): any {
        const descriptor: PropertyDescriptor = {
            writable: false
        };
        return descriptor;
    }
 
    // == 2、对属性值进行修改
    function nameDecorator2(target: any, key: string): any {
        // == 修改的并不是实例上的 name， 而是原型上的 name
        target[key] = 'lee';
    }
    class Test {
        @nameDecorator2
        name = 'Dell';
    }
    const test = new Test();
    console.log(test.name); // Dell
    console.log((test as any).__proto__.name); // lee
}
