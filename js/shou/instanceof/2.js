/**
 * @func 判断left是否为right的实例
 * @param {*} left : 对象 ;
 * @param {*} right  对象
 * @return boolean
 */
function myInstanceof(left, right) {
    // right 只要出现在left 原型链的任何一栈都可以
    // return left instanceof right
    while(true) {
        // 不用往下走？
        if(left === null) {
            return false;
        }
        // left __proto__原型链查找一直进行下去
        if(left.__proto__ === right.prototype) {
            return true;
        }
        left = left.__proto__;
    }
}
myInstanceof(aTao, Person);