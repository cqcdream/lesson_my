// 生成对象
// 猫这个类的模板
// var Cat = {
//     name : '',
        
//     color : ''
    
// }
// // 基于Object 对象
// var cat1 = {}; // new Object
// cat1.name = "大毛";
// cat1.color = "黄色";
// // 封装起来
// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "黑色";
// 函数 大写的 类
//"属性"（property）和"方法"（method）
function Cat(name,color) {
    this.name = name;
    this.color = color;
}
//实例化过程    cat2.__proto__ == cat3.__proto__ 
// cat3.__proto__  指向原型对象
var cat3 = new Cat('三毛','灰色');
var cat2 = new Cat('二黄','黑色');
console.log(cat3);