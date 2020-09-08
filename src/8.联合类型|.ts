// == 1、联合类型
function reverse1(x: number | string, y?: string): number | string | null {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return null;
}
