// == 1、数字类型枚举类型
enum HTTP_CODE {
    OK = 200,
    NOT_FOUND = 404,
}
let res: number = 200;
if (res === HTTP_CODE.OK) {
    console.log('success');
}


// == 2、字符串类型枚举类型
enum URLS {
    LOGIN = 'login',
    LOGOUT = 'logout',
}