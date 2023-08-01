// pop 移除最后一个元素
// 被移除的元素的值
const arr = [1,2,3];
// console.log(arr.pop());

// 变量的类型由值决定
Array.prototype.pop = function() {
    let tmp = this[this.length-1];
    // this[this.length-1] = undefined;
    this.length--;
    // delete this[this.length - 1];
    return tmp;
    
}
console.log(arr.pop());
console.log(arr);