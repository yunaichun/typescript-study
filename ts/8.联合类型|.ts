// == 1、联合类型 - 类型保护 - typeof
function reverse1(x: number | string, y?: string): number | string | null {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return null;
}


// == 2、联合类型 - 类型保护 - in
interface Bird {
    fly: boolean,
    sing: () => void
}
interface Dog {
    fly: boolean,
    bark: () => {}
}
function tranAnial(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing();
    } else {
        animal.bark()
    }
}

// == 3、联合类型 - 类型保护 - instanceof
class NumberObj {
    count: number = 0;
}
function add(first: object|NumberObj, second: object|NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
