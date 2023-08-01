var strA = {
    name: "A"
};

var strB = {    
    name: "B"
};

function sayHi(...arges) {
    console.log(arguments,...arges);
    console.log(`你好，我是${this.name}`);
}
 // 它可以用来调用所有者对象作为参数的方法。
 // 通过 call()，您能够使用属于另一个对象的方法。
// Object.prototype.sayHi = sayHi;
// strA.sayHi(); // 原型链
// sayHi.call(strA,'name');
sayHi.call(strA, 1, 2);
sayHi.apply(strA, [1,2]);
// sayHi.bind(strA, 1, 2)();// bind 返回的是一个新的函数，你必须调用它才会被执行。