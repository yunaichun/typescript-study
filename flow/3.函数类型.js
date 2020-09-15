// @flow
// 函数声明 
function getLength(str: string): number {
    return str.length;
}

// 函数表达式
const greeting = function(welcome: string): void{
    console.log(welcome);
}

// 箭头函数
const addNumber = (a: number, b: number): number => (a + b);
