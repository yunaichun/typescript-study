// Es6 模块化
declare module 'jquery' {
    // == 1、定义全局变量
    function $$(readyFunc: () => void): void;
    // == 2、定义全局函数
    interface JqueryInstance {
        html: (html: string) => {};
    }
    function $$(selector: string): JqueryInstance;
    // == 3、定义命名空间（对类、对象进行类型定义）
    namespace $$ {
        namespace fn {
            class init { 
            }
        }
    }

    export = $$;
}

// import {$$} from 'jquery';
// import $$ = require("jquery")
// $$(function() {
//   $$('body').html('<div>123</div>');
//   new $$.fn.init();
// });
