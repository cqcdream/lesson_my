//对象就是属性和方法的集合
//OOP Object Oriented Programming 面向对象编程

// class Person {

// }
// const x = new Person();
let obj = {
    name: '小美',
    sayHi() {
        console.log('hello');
    }
}
obj.name
// 对象
const xm = new Object(); // js Object 函数 也是对象 一切对象的原型
// 对象字面量都基于Object 来构造， 原型式面向对象

xm.name = '小玲子'
xm.sayHi= function() {
    console.log('hello');
}
console.log(xm);