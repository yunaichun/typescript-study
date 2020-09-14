// == 1、字面量类型
function setPosition1(ele: Element, direction: 'left' | 'top' | 'right' | 'bottom') {
}


// == 2、类型别名
type dir = 'left' | 'top' | 'right' | 'bottom';
function setPosition2(ele: Element, direction: dir) {
}
