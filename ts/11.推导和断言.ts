// == 1、类型推导
function fn111(x = 1) {
}
function fn222(x: number, y:number) {
    return x + y;
}


// == 2、类型断言
let img1 = <HTMLImageElement>document.querySelector('.box');
let img2 = document.querySelector('.box') as HTMLImageElement;
if (img1) {
    img1.src
}
