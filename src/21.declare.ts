// == 1、定义全局变量
declare function $(readyFunc: () => void): void;
// == 2、定义全局函数
interface JqueryInstance {
    html: (html: string) => {};
}
declare function $(selector: string): JqueryInstance;
// == 3、定义命名空间（对类、对象进行类型定义）
declare namespace $ {
    namespace fn {
        class init { 
        }
    }
}

$(function() {
    $('body').html('<div>123</div>');
    new $.fn.init();
});