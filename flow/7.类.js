/* @flow */

// == 1.类的标注
// class WrongClass1{
//     method() {
//         this.props = 1; // Flow 会报错，因为没有对 props 进行类型标注
//     }
// }
// class WrongClass2{
//     method(){
//         this.props: number = 1; // Flow 还是会报错，对属性的类型标注必须与方法同一个层级
//     }
// }
class RightClass {
    props: number;            // 对，就像这样。
    method(){
        this.props = 1; 
    }
}


// == 2. 类作为类型
class MyClass{}
const mc: MyClass = new MyClass();
