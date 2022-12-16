const arr = [1,2,3];
// 末尾添加一个元素
// 返回值是数组长度
// 在末尾添加多个元素
Array.prototype.push = function() {
    //覆盖原有方法
    //如何得到所以参数 [] arguments
    // console.log(arguments,'///');
    //this 面向对象内部，方法里this 指向实例后的对象
    // console.log('--');
    // 所以复杂数据类型 typeof object, 
    // [object Array]
    // console.log(typeof arguments, Object.prototype.toString.call(arguments));  //object [object Arguments]
    for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}
arr.push(4,5);
console.log(arr);
console.log(arr.push());