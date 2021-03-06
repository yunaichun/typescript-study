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



// == 3、默认从 0 开始
const Status = {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2
}
enum Status1 {
    OFFLINE,
    ONLINE,
    DELETED
}
console.log(Status1.OFFLINE, Status1[0]); // 0 OFFLINE
