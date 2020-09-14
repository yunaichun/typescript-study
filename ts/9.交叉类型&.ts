// == 1、交叉类型
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
type o4 = o1 & o2;
let obj44: o4 = {...obj11, ...obj22};
