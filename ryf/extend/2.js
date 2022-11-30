let cai = {
    nickname:'情圣',
    sayHi() {
        
        console.log('hello');
    }
}

let aTo = {};
// console.log(aTo.__proto__);
// 拦截 __proto__任何一个对象都拥有私有属性
aTo.__proto__ = cai;
console.log(aTo.nickname);