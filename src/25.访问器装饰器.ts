// == 访问器装饰器
namespace SetDecorator {
    function visitDecorator(
        target: any,
        key: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.writable = false;
    }
    class Test {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        @visitDecorator
        set name(name: string) {
            this._name = name;
        }
    }
    const test = new Test('dell');
    test.name = 'dell lee';
    console.log(test.name);      
}
