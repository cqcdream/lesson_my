//constructor 构造函数
// js 没有class function 代替 class 类的封装
function Person(name, age) {
    this.name = name;
    this.age = age;
}
//实例化
const xlz = new Person('小玲子', 16);
console.log(xlz.name);