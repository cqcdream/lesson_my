    // 构造函数
    // Function -> Object 
function Person(name, age) {
    // 构造
    // 基于原型的封装 {} 
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function() {
    console.log(`你好，${this.name}`);
}
const aTao = new Person('叫涛',18);
console.log(aTao instanceof Person);