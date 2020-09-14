// == 1、泛型-函数（generic 泛指的类型）
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}
// == 在使用的时候才确定类型（也可以不写<number, string>）
join<number, string>(1, '1');
join(1, '1');

// == Array<T> 为数组的范型写法，等价于 T[]
function map<T>(params: Array<T>) {
    return params;
}
map<string>(['123']);


// == 2、泛型-类
interface Item { name: string }
// == 泛型 T 只能是 number|string|Item
class DataManager<T extends number|string|Item> {
    // == 可以存储任意类型的数组数据，此处的 T 代表数组的某一项
    constructor(private data: T[]) {}
    getItem(index: number): T {
        return this.data[index];
    }
}
const dataManager = new DataManager<number|string|Item>([1, '2', {name: '2'}]);
console.log(dataManager.getItem(0));


// == 3、泛型-类型注解
function hello<T>(params: T) {
    return params;
}
const func: <T>(param: T) => T = hello;


// == 4、泛型-keyof（keyof 操作类型，typeof操作值）
interface Person110 {
    name: string;
    age: number;
    gender: string;
}
class Teacher110 {
    constructor(private info: Person110) {}
    // == keyof Person110 为 'name'|'age'|'gender'
    getInfo<T extends keyof Person110>(key: T): Person110[T] {
        return this.info[key];
    }
}
const teacher110 = new Teacher110({
    name: 'dell',
    age: 18,
    gender: 'male'
});
console.log(teacher110.getInfo('name'));
