
//匿名函数
//js 变量或常量的类型由值决定
//函数表达式
//回文字符串 对称性
const reverse = function (str) {
    let reverseStra = '';
    for (let i = str.length - 1;i >= 0;i--) {
        reverseStra += str[i];
    }
    return reverseStra;

   //return str.split('').reverse().join('');
}
console.log(reverse('hello'));
//函数定义
// function reverse() {
    
// }