"use strict";
// == 1、针对值进行操作
console.log('name' in { name: 1 });
console.log('age' in { name: 1 });
// == 注意：in 后面的类型值必须是 string、number、symbol
