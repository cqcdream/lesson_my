// 定义（封装）人这一个类
// 两种类的封装写法
// js 正宗写法 效果一样
// es5 基于对象的原型式
// let obj = {};// Object(构造函数)   Object.prototype new Object()
// obj.__proto__ 这个对象的原型
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    sayHi() {
        console.log('hello');
    }
}

// let aTo = Person('小美',17);
let aTo = new Person('小美',17);
aTo.sayHi();
console.log(aTo);
// 函数都有一个protype 对象
// 函数也是对象

// es6+ 面向对象式，传统的java c++ class 关键字