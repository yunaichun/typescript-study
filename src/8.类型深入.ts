// == 1、联合类型
function reverse1(x: number | string, y?: string): number | string | null {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return null;
}


// == 2、交叉类型
interface o1 {
    x: number,
    y: number,
}
interface o2 {
    z: number,
}
let obj11: o1 = {
    x: 1,
    y: 2
}
let obj22: o2 = {
    z: 3
}
let obj33: o1 & o2 = {...obj11, ...obj22}


// == 3、字面量类型
function setPosition1(ele: Element, direction: 'left' | 'top' | 'right' | 'bottom') {
}

// == 4、类型别名
type dir = 'left' | 'top' | 'right' | 'bottom'
function setPosition2(ele: Element, direction: dir) {
}
