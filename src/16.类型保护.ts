// == 1、断言方法
function toUpperCase1(str: string|string[]) {
    // if ((<string>str).toUpperCase) {
    //     return (<string>str).toUpperCase()
    // } else {
    //     return (<string[]>str).push()
    // }
}


// == 2、typeof
function toUpperCase2(str: string|string[]) {
    if (typeof str === 'string') {
        str.toUpperCase();
    } else {
        str.join('');
    }
}


// == 3、instanceof
function toUpperCase3(str: string|string[]) {
    if (str instanceof Array) {
        str.join('');
    } else {
        str.toUpperCase();
    }
}


// == 4、自定义类型保护
function canEach(data: Element[]|NodeList|Element ): data is Element[]|NodeList {
    return (<NodeList>data).forEach !== undefined;
}
function fn333(elements: Element[]|NodeList|Element) {
    if (canEach(elements)) {
        elements.forEach(() => {});
    } else {
        elements.classList.add('box');
    }
}
let eles = document.querySelectorAll('.box');
fn333(eles);
