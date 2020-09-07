"use strict";
// == 1、数字类型枚举类型
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE["tea"] = "1231";
})(HTTP_CODE || (HTTP_CODE = {}));
var res = 200;
if (res === HTTP_CODE.OK) {
    console.log('success');
}
// == 2、字符串类型枚举类型
var URLS;
(function (URLS) {
    URLS["LOGIN"] = "login";
    URLS["LOGOUT"] = "logout";
})(URLS || (URLS = {}));
