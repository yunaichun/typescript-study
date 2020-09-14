// == 1、public、private、protected
class Person100 {
    public name: string = '';
    private age1: number = 0;
    protected gender: string = 'male';
    // == 只能读不能改属性
    public readonly age2: number = 0;
    public say() {
        return this.name
    }
    public say2() {
        return this.age1;
    }
}
class Teacher100 extends Person100{
    say3() {
        return super.say() + '2';
    }
    say4() {
        return this.gender;
    }
}
const teacher100 = new Teacher100();
teacher100.name = '123';
console.log(teacher100.say3());


// == 2、constructor、super
class Person101 {
    // public name: string = '';
    // constructor(name: string) {
    //     this.name = name
    // }
    // == 等价于下面的写法
    constructor(public name: string) {
    }
}
class Teacher101 extends Person101{
    // == 等价于下面的写法
    constructor(public age: number) {
        // == 调用 super 实际是调用父构造器
        // == 如果父类没有 constructor 也必须要写 super()
        super('name');
    }
}
const teacher101 = new Teacher101(123)
console.log(teacher101.name);
console.log(teacher101.age);


// == 3、getter、setter
class Person102 {
    constructor(private _name: string) {
    }
    get getName() {
        return this._name;
    }
    set setName(name: string) {
        this._name = name;
    }
}
const person102 = new Person102('123');
console.log(person102.getName)
person102.setName = '1231';
console.log(person102.getName);


// == 4、static
class Person103 {
    // == constructor 定义了 private，代表外部不能通过 new 操作
    private constructor(public name: string) {}
    // == _instance 必须是 static 类型，不然 getInstance 方法中 this._instance 获取不到
    private static _instance: Person103;
    public static getInstance() {
        if (!this._instance) {
            this._instance = new Person103('123')
        }
        return this._instance;
    }
}
const instance1 = Person103.getInstance();
console.log(instance1.name);


// == 5、abstract
abstract class Geom {
  width: number = 0;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 123;
  }
}
class Square {}
class Triangle {}


// == 6、interface
interface Person104 {
    name: string;
}
interface Teacher104 extends Person104 {
    teachingAge: number;
}
interface Student104 extends Person104 {
    age: number;
}
const teacher104 = {
    name: 'dell',
    teachingAge: 3
};
const student104 = {
    name: 'lee',
    age: 18
};
const getUserInfo = (user: Person104 /*Teacher ｜ Student*/) => {
    console.log(user.name);
};
getUserInfo(teacher104);
getUserInfo(student104);
