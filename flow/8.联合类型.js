/* @flow */

// == 1. 联合类型
type UserIdType = string | number;
let user_id : UserIdType = 12345678;
user_id = '87654321';


// == 2.类型推导
type MsgType = string | number;
function show(msg: MsgType) {
    if (typeof msg === 'string' ){
    } else {
    }
}
