// == 1、typeof 操作值 -> 拿到 interface
let colors = {
    color1: 'red',
    color2: 'blue',
};
let aa = typeof colors;// == "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
type bb = typeof colors;// == {color1: string, color2: string}
let test1: bb = {
    color1: 'red1',
    color2: 'blue1',
};
