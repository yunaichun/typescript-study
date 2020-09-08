// == 1、针对值进行操作
console.log('name' in {name: 1});
console.log('age' in {name: 1});


// == 2、针对类型进行操作
interface Person100 {
    name: string,
    age: number,
}
type newPerson100 = {
    [k in keyof Person100]: number
};

// == 注意：in 后面的类型值必须是 string、number、symbol
