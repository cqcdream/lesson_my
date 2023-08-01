// 数组的优势  以O(1)的时间访问到 第i个元素
const arr = [1, 2, 3];
const arr2 = ['a','b','c'];
// arr.push(4);
// console.log(arr);

Array.prototype.push2 = function(num) {//num 形参
    // arr [1,2,3,4]
    // this -> arr, 最后一个下标为 length - 1
    this[this.length] = num;
    // console.log( num,'--');
    // console.log(this);
    return this.length;


}
console.log(arr.push(5),'///');
console.log(arr.push2(4));//4 实参
// arr2.push2(4);